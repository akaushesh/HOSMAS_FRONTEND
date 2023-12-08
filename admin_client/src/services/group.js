import { groupApi } from "./api";

export const createGroup = async (data, accessToken) => {
  const res = await groupApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getGroup = async (id, accessToken) => {
  const res = await groupApi.get(`view/${id}/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateGroup = async (id, data, accessToken) => {
  const res = await groupApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteGroups = async (id, accessToken) => {
  const res = await groupApi.delete("delete/", {
    data: { ids: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const addStudentToGroup = async (data, accessToken) => {
  const res = await groupApi.post("edit/add-member/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
