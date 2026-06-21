import axios from 'axios';

// export const url = 'https://central.hosmas.ccstiet.com/';
// export const cleaningUrl = 'https://cleaning.hosmas.ccstiet.com/';
// export const laundryUrl = 'https://hosmas-laundry.ccstiet.com/';
// export const leaveUrl = 'https://hosmas-mess-leave.ccstiet.com/';

// export const url = 'http://localhost:3376/';
// export const centralUrl = 'http://localhost:3376/';
// export const cleaningUrl = 'http://localhost:3378/';
// export const laundryUrl = 'http://localhost:6700/'; //ISSUE - 3388
// export const allocationUrl = 'http://localhost:6543/';
// export const messUrl = 'http://localhost:6555/';
export const leaveUrl = 'http://localhost:6699/';

export const url = 'http://13.50.249.120:3376/';
export const centralUrl = 'http://13.50.249.120:3376/';
export const cleaningUrl = 'http://13.50.249.120:3378/';
export const laundryUrl = 'http://13.50.249.120:3388/';
export const allocationUrl = 'http://13.50.249.120:6543/';
export const messUrl = 'http://13.50.249.120:6555/';
// export const leaveUrl = 'http://13.50.249.120:6699/';

export const authApi = axios.create({
  baseURL: url,
});

export const allocationApi = axios.create({
  baseURL: allocationUrl,
});

export const dashboardApi = axios.create({
  baseURL: `${url}dashboard/`,
});

export const studentApi = axios.create({
  baseURL: `${url}student/`,
});

export const invitationApi = axios.create({
  baseURL: `${allocationUrl}halloc/group/invitation/`,
});

export const groupApi = axios.create({
  baseURL: `${allocationUrl}halloc/group/`,
});

export const preferenceApi = axios.create({
  baseURL: `${allocationUrl}halloc/pref/`,
});

export const roomApi = axios.create({
  baseURL: `${allocationUrl}halloc/pref/alloted-hostel-levels/`,
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
