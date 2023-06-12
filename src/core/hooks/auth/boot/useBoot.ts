import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ELocalItems } from "core/localStorage";
import { checkPassword } from "core/services/auth";
import { Alert } from "react-native";

interface LocalLoginProps {
  email: string;
  password: string;
}

const useBoot = () => {
  const { reset } = useNavigation();

  const init = async () => {
    try {
      const login = await AsyncStorage.getItem(ELocalItems.login);

      if (login) {
        const { email, password } = JSON.parse(login) as LocalLoginProps;

        await checkPassword(email, password);

        reset({
          index: 1,
          routes: [
            {
              name: "Home",
            } as any,
          ],
        });
        return;
      }

      reset({
        index: 1,
        routes: [
          {
            name: "Login",
          } as any,
        ],
      });
    } catch (err) {
      console.log(err);
      reset({
        index: 1,
        routes: [
          {
            name: "Login",
          } as any,
        ],
      });
    }
  };
  return { init };
};

export default useBoot;
