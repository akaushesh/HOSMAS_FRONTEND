import { exportApi } from "./api";

export const exportGroups = async (sectionId, accessToken) => {
  const res = await exportApi.post(
    "groups/",
    { section: sectionId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const exportStudents = async (batchId, accessToken) => {
  const res = await exportApi.post(
    "students/",
    { batch: batchId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const exportDefaulters = async (accessToken) => {
  const res = await exportApi.get("defaulters/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
