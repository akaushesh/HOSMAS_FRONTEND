import axios from "axios";
import { URL } from "config";

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
