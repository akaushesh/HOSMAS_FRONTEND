import { batchApi } from "./api";

export const getAllUnitializedBatches = async (accessToken) => {
  const res = await batchApi.get("uninitialized-batch/view/multiple/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
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

export const getBatch = async (id, accessToken) => {
  const res = await batchApi.get(`batch/view/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getBatchAnalytics = async (id, accessToken) => {
  const res = await batchApi.get(`batch/analytics/?batch=${id}`, {
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

export const deleteBatch = async (batchId, accessToken) => {
  const data = { id: batchId };

  const res = await batchApi.delete("batch/delete/", {
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
