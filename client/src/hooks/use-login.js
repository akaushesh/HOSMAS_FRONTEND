import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useLogin = () => {
  const mutation = useMutation(async ({ email, password }) => {
    console.log("Here");
    const loginURL = URL + "auth/token/";
    const data = { email, password };

    var loginConfig = {
      method: "post",
      maxBodyLength: Infinity,
      headers: {},
      data: data,
    };

    const loginResponse = await axios.post(loginURL, data, { loginConfig });

    window.sessionStorage.setItem("authenticated", "true");
    window.sessionStorage.setItem("jwt", loginResponse?.data?.access);
    window.sessionStorage.setItem("refresh", loginResponse?.data?.refresh);
    return loginResponse?.data;
  });
  return { login: mutation };
};
