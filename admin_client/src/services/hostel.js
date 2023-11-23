import { hostelApi } from "./api";

export const createHostel = async (data, accessToken) => {
  const res = await hostelApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getAllHostels = async (accessToken) => {
  const res = await hostelApi.get("view/multiple/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getHostel = async (id, accessToken) => {
  const res = await hostelApi.get(`view/${id}/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateHostel = async (id, data, accessToken) => {
  const res = await hostelApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteHostel = async (id, accessToken) => {
  console.log("test ", accessToken);
  const res = await hostelApi.delete("delete/", {
    data: { id: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
