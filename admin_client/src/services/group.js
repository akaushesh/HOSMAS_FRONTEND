import { groupApi } from "./api";

export const createGroup = async (data, accessToken) => {
  const res = await groupApi.post("create/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getGroup = async (id, accessToken) => {
  const res = await groupApi.get(`view/${id}/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateGroup = async (id, data, accessToken) => {
  const res = await groupApi.put(`update/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteGroups = async (id, accessToken) => {
  const res = await groupApi.delete("delete/multiple/", {
    data: { ids: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const addStudentToGroup = async (rollno, groupId, accessToken) => {
  const data = {
    rollno: rollno,
    group: groupId,
  };

  const res = await groupApi.post("edit/add-member/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const removeMemberFromGroup = async (rollno, accessToken) => {
  const data = {
    rollno: rollno,
  };

  const res = await groupApi.post("edit/remove-member/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const changeGroupLeader = async (rollno, groupId, accessToken) => {
  const data = {
    rollno: rollno,
    group: groupId,
  };

  const res = await groupApi.post("edit/change-leader/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
