import { roomTypeApi } from "./api";

export const createRoomType = async (data, accessToken) => {
  const res = await roomTypeApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getAllRoomTypes = async (accessToken) => {
  const res = await roomTypeApi.get("view/multiple/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getRoomType = async (id, accessToken) => {
  const res = await roomTypeApi.get(`view/${id}/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateRoomType = async (id, data, accessToken) => {
  const res = await roomTypeApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteRoomType = async (id, accessToken) => {
  const res = await roomTypeApi.delete("delete/", {
    data: { id: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
