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
