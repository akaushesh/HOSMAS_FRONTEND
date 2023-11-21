import { sectionApi } from "./api";

export const getAllSections = async (accessToken) => {
  const res = await sectionApi.get("view/multiple", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const createSection = async (data, accessToken) => {
  const res = await sectionApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateSection = async (id, data, accessToken) => {
  const res = await sectionApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
