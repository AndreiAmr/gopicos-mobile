import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Keyboard, Alert } from "react-native";
import { lightTheme } from "infra/packages/styled-components/theme";
import { Formik } from "formik";
import { FontsEnum } from "infra/types/components/text";
import BottomSheet from "@gorhom/bottom-sheet";
import * as yup from "yup";
import Input from "ui/components/Input";
import Text from "ui/components/Text";
import Button from "ui/components/Button";
import * as S from "./styles";
import FormContainer from "ui/components/FormContainer";

interface PasswordModalProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading?: boolean;
  onClose: () => void;
  email: string;
}

const validationSchema = yup.object().shape({
  password: yup.string().required("Insira a senha para continuar"),
});

const PasswordModal = React.forwardRef(
  (
    { onSubmit, isLoading, email }: PasswordModalProps,
    ref: React.Ref<BottomSheet>
  ) => {
    const [snaps, setSnaps] = useState<string[]>(["40%", "50%"]);

    useEffect(() => {
      Keyboard.addListener("keyboardDidShow", () => {
        setSnaps(["70%", "80%"]);
      });
      Keyboard.addListener("keyboardDidHide", () => {
        setSnaps(["40%", "50%"]);
      });
    }, []);

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snaps}
        enablePanDownToClose
        backgroundStyle={{
          backgroundColor: lightTheme.colors.background,
        }}
        // onClose={() => Keyboard.dismiss()}
        handleIndicatorStyle={{
          backgroundColor: "#ffffff",
          width: 80,
          height: 7,
        }}
      >
        <S.Container>
          <Text
            color={lightTheme.colors.text_light}
            size="lg"
            fontFamily={FontsEnum.BaiSemibold}
            centered
          >
            Insira sua senha para continuar
          </Text>
          <Formik
            initialValues={{ password: "andrei.amaral" }}
            onSubmit={(values) => onSubmit(email, values.password)}
            validationSchema={validationSchema}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <>
                <Input
                  label="Senha"
                  onChange={handleChange("password")}
                  value={values.password}
                  error={errors.password}
                  isSecurity
                />

                <Button onPress={handleSubmit} isLoading={isLoading} />
              </>
            )}
          </Formik>
        </S.Container>
      </BottomSheet>
    );
  }
);
export default PasswordModal;
