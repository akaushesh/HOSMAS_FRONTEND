import { defaulterApi } from "./api";

export const getAllDefaulters = async (q, defaulters_per_page, page, accessToken) => {
  const res = await defaulterApi.get(
    `getDefaulters?q=${q}&page=${page}&defaulters_per_page=${defaulters_per_page}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const createDefaulter = async (rollNo, accessToken) => {
  const data = { student: rollNo };

  const res = await defaulterApi.post("defaulter/create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteDefaulters = async (rollNos, accessToken) => {
  const data = { ids: rollNos };

  const res = await defaulterApi.delete("defaulter/delete/multiple/", {
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const importDefaulters = async (data, accessToken) => {
  const res = await defaulterApi.post("import-defaulters/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const exportDefaulters = async (accessToken) => {
  const res = await defaulterApi.get("export/defaulters/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
