import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import http from "infra/http";
import BottomSheet from "@gorhom/bottom-sheet";
import { useToast } from "native-base";
import Text from "ui/components/Text";
import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";
import { Box } from "native-base";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { checkPassword } from "core/services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ELocalItems } from "core/localStorage";

interface ErrorProps {
  field: "email" | "password";
  message: string;
}

const useLogin = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const navigation = useNavigation<any>();

  const handleSubmit = async (email: string) => {
    try {
      setIsLoading(true);
      const data = await http.post("/check-email", {
        email: email,
      });

      if (data) {
        bottomSheetRef.current.expand();
      }
      setIsLoading(false);

      return;
    } catch (err) {
      Alert.alert("CAI aqui");
      console.log(err?.response?.data);
      console.log(err);
      Alert.alert("deu ruim");

      console.log(Object.keys(err));
      setIsLoading(false);
    }
  };

  const handleSubmitPassword = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await checkPassword(email, password);
      await AsyncStorage.setItem(
        ELocalItems.login,
        JSON.stringify({ email, password })
      );

      navigation.navigate("Home");

      setIsLoading(false);

      return;
    } catch (err) {
      console.log(err);
      if (err?.response?.data === "Senha Incorreta") {
        toast.show({
          title: "Senha incorreta!",
          description: "Verifique e tente novamente.",
          variant: "error",
          placement: "top",
          render: () => {
            return (
              <Box
                height={"60px"}
                width={widthPercentageToDP("45%")}
                background={"gray.800"}
                px="10px"
                py="5px"
                borderRadius="lg"
              >
                <Text
                  color={lightTheme.colors.orange}
                  size="md"
                  fontFamily={FontsEnum.BaiSemibold}
                >
                  Senha Incorreta!
                </Text>
                <Text
                  color={lightTheme.colors.white}
                  size="sm"
                  fontFamily={FontsEnum.BaiSemibold}
                >
                  Verifique e tente novamente.
                </Text>
              </Box>
            );
          },
        });
      }
      console.log(Object.keys(err));
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    refs: {
      bottomSheetRef,
    },
    onSubmit: handleSubmit,
    onSubmitPassword: handleSubmitPassword,
  };
};

export default useLogin;
