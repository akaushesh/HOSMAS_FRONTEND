import { importApi } from "./api";

export const importDefaulters = async (data, accessToken) => {
  const res = await importApi.post("defaulters/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const importStudents = async (data, accessToken) => {
  const res = await importApi.post("students/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
