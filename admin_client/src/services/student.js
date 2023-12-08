import { studentApi } from "./api";

export const createStudent = async (data, accessToken) => {
  const res = await studentApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getStudent = async (id, accessToken) => {
  const res = await studentApi.get(`view/${id}/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateStudent = async (id, data, accessToken) => {
  const res = await studentApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteStudent = async (id, accessToken) => {
  console.log("test ", accessToken);
  const res = await studentApi.delete("delete/", {
    data: { id: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteMultipleStudents = async (ids, accessToken) => {
  console.log("test ", accessToken);
  const res = await studentApi.delete("delete/multiple", {
    data: { ids: ids },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
