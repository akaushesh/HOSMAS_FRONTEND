import { authApi } from "./api";

export const signIn = async (email, password) => {
  const res = await authApi.post("auth/token/", { email, password });
  return res;
};

export const getProfile = async (accessToken) => {
  const res = await authApi.get("dashboard/profile/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res;
};
