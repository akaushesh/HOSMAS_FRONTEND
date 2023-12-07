import { otherApi } from "./api";

export const getAllGroups = async (query, groups_per_page, page, accessToken) => {
  const res = await otherApi.get(
    `dashboard/getGroups?groups_per_page=${groups_per_page}&page=${page}&q=${query}`,
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

export const getStudents = async (query, students_per_page, page, batch, accessToken) => {
  const res = await otherApi.get(
    `dashboard/getStudents?students_per_page=${students_per_page}&page=${page}&batch=${batch}&q=${query}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const searchStudent = async (rollNo, accessToken) => {
  const res = await otherApi.get(`dashboard/search-student/view/${rollNo}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
