import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useProfile = () => {
  const { data: user } = useQuery({
    queryFn: async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");
        if (!jwt) return null;
        const getProfileConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const newURL = URL + "student/profile/";

        const getProfileResponse = await axios.get(newURL, getProfileConfig);
        return getProfileResponse?.data;
      } catch (err) {
        return null;
      }
    },
    queryKey: ["getProfile"],
  });

  return { user };
};

export const useRefresh = async () => {
  const url = URL + "auth/token/refresh/";
  const refreshToken = sessionStorage.getItem("refresh");
  const data = { refresh: refreshToken };

  const refreshConfig = {
    maxBodyLength: Infinity,
    headers: {},
  };

  const refreshTokenResponse = await axios.post(url, data, { refreshConfig });
  sessionStorage.setItem("jwt", refreshTokenResponse?.data?.access);
};
