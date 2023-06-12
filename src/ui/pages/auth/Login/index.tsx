import React from "react";
import { Image, KeyboardAvoidingView, ScrollView, View } from "react-native";
import Logo from "assets/images/logo.png";
import Text from "ui/components/Text";
import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";
import * as S from "./styles";
import FormContainer from "ui/components/FormContainer";
import Input from "ui/components/Input";
import Button from "ui/components/Button";
import BottomSheet from "@gorhom/bottom-sheet";
import { Formik, useFormik } from "formik";
import { RFValue } from "react-native-responsive-fontsize";
import useLogin from "./hooks/useLogin";
import * as yup from "yup";
import PasswordModal from "./components/PasswordModal";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email deve ser válido")
    .required("Insira o email para continuar"),
});

const LoginScreen = () => {
  const { refs, onSubmit, isLoading, onSubmitPassword } = useLogin();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    validationSchema,
    initialValues: { email: "andrei.amaral@gmail.com" },
    onSubmit: (val) => onSubmit(val.email),
  });

  return (
    <>
      <S.Container>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={Logo} />
          <S.TextBox>
            <Text
              color={lightTheme.colors.text_light}
              size="md"
              fontFamily={FontsEnum.BaiSemibold}
              centered
            >
              Encontre lugares para andar de skate próximo a você!
            </Text>
          </S.TextBox>
          <KeyboardAvoidingView
            behavior={"padding"}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Formik
              initialValues={{ email: "andrei.amaral@gmail.com" }}
              onSubmit={(values) => onSubmit(values.email)}
              validationSchema={validationSchema}
            >
              <FormContainer>
                <Input
                  label="E-mail"
                  onChange={handleChange("email")}
                  value={values.email}
                  error={errors.email}
                />

                <Button onPress={handleSubmit} isLoading={isLoading} />
              </FormContainer>
            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={{ position: "absolute", bottom: RFValue(13) }}>
          <Text
            color={lightTheme.colors.text_light}
            size="md"
            fontFamily={FontsEnum.BaiSemibold}
            centered
          >
            Desenvolvido por Andrei Amaral
          </Text>
        </View>
        <PasswordModal
          onSubmit={onSubmitPassword}
          isLoading={isLoading}
          onClose={() => refs.bottomSheetRef.current.close()}
          ref={refs.bottomSheetRef}
          email={values.email}
        />
      </S.Container>
    </>
  );
};

export default LoginScreen;
