import axios from 'axios';

export const url = 'https://api.hosmas.ccstiet.com/';

export const authApi = axios.create({
  baseURL: url,
});

export const dashboardApi = axios.create({
  baseURL: `${url}dashboard/`,
});

export const studentApi = axios.create({
  baseURL: `${url}student/`,
});

export const invitationApi = axios.create({
  baseURL: `${url}student/invitation/`,
});

export const groupApi = axios.create({
  baseURL: `${url}student/group/`,
});

export const preferenceApi = axios.create({
  baseURL: `${url}preferences/`,
});
