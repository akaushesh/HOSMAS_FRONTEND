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

export const getAllBatches = async (accessToken) => {
  const res = await batchApi.get("batch/view/multiple/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const createBatch = async (data, accessToken) => {
  const res = await batchApi.post("batch/create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateBatch = async (id, data, accessToken) => {
  const res = await batchApi.put(`batch/update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteBatch = async (data, accessToken) => {
  const res = await batchApi.delete("delete/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
