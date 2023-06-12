import http from "infra/http";

export const checkPassword = async (email: string, password: string) => {
  return await http.post("/check-password", {
    email,
    password,
  });
};
