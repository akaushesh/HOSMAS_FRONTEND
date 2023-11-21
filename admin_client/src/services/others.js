import { otherApi } from "./api";

export const getAllGroups = async (accessToken) => {
  const res = await otherApi.get("dashboard/getGroups", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getGroupMembers = async (accessToken) => {
  const res = await otherApi.get("dashboard/getGroups", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getStudents = async (id, data, accessToken) => {
  const res = await otherApi.put(`dashboard/getStudents`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
