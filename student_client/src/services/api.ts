import axios from 'axios';

export const url = 'https://api.hosmas.ccstiet.com/';
export const centralUrl = 'https://central.hosmas.ccstiet.com/';
export const cleaningUrl = 'https://cleaning.hosmas.ccstiet.com/';
export const laundryUrl = 'https://hosmas-laundry.ccstiet.com/';
export const leaveUrl = 'https://hosmas-mess-leave.ccstiet.com/';

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

export const roomApi = axios.create({
  baseURL: `${url}preferences/alloted-hostel-levels/`,
});

export const centralApi = axios.create({
  baseURL: centralUrl,
});

export const cleaningApi = axios.create({
  baseURL: cleaningUrl,
});

export const laundryApi = axios.create({
  baseURL: laundryUrl,
});

export const leaveApi = axios.create({
  baseURL: leaveUrl,
});
