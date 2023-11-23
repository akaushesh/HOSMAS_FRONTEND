import { choiceApi } from "./api";

export const createChoice = async (data, accessToken) => {
  const res = await choiceApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getChoices = async (id, accessToken) => {
  const res = await choiceApi.get(`view/multiple/?section=${id}/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getSectionDetails = async (id, accessToken) => {
  const res = await choiceApi.get(`view/multiple/?section=${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateChoice = async (id, data, accessToken) => {
  const res = await choiceApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteChoice = async (id, accessToken) => {
  const res = await choiceApi.delete("delete/", {
    data: { id: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
