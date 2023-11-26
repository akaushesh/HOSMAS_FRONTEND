import { otherApi } from "./api";

export const getAllGroups = async (groups_per_page, page, accessToken) => {
  const res = await otherApi.get(
    `dashboard/getGroups?groups_per_page=${groups_per_page}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
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

export const getStudents = async (groups_per_page, page, batch, accessToken) => {
  const res = await otherApi.get(
    `dashboard/getStudents?groups_per_page=${groups_per_page}&page=${page}&batch=${batch}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const importStudents = async (data, accessToken) => {
  const res = await otherApi.post("dashboard/import-data", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
