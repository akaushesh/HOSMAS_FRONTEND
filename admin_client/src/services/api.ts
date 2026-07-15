import axios from 'axios';

export const url = 'https://central.hosmas.ccstiet.com/';
export const centralUrl = 'https://central.hosmas.ccstiet.com/';
export const allocationUrl = 'https://allocation.hosmas.ccstiet.com';
export const cleaningUrl = 'https://cleaning.hosmas.ccstiet.com/';
export const laundryUrl = 'https://laundry.hosmas.ccstiet.com/';
export const leaveUrl = 'https://leave.hosmas.ccstiet.com/';
export const messUrl = 'https://mess.hosmas.ccstiet.com/';


// export const url = 'http://localhost:3376/';
// export const centralUrl = 'http://localhost:3376/';
// export const cleaningUrl = 'http://localhost:3378/';
// export const laundryUrl = 'http://localhost:6700/'; 
// export const allocationUrl = 'http://localhost:6543/';
// export const messUrl = 'http://localhost:6555/';
// export const leaveUrl = 'http://localhost:6699/';


export const authApi = axios.create({ baseURL: url });
export const dashboardApi = axios.create({ baseURL: `${url}dashboard/` });
export const studentApi = axios.create({ baseURL: `${url}student/` });
export const invitationApi = axios.create({ baseURL: `${allocationUrl}halloc/group/invitation/` });
export const groupApi = axios.create({ baseURL: `${allocationUrl}halloc/group/` });
export const preferenceApi = axios.create({ baseURL: `${allocationUrl}halloc/pref/` });
export const roomApi = axios.create({ baseURL: `${allocationUrl}halloc/pref/alloted-hostel-levels/` });
export const cleaningApi = axios.create({ baseURL: cleaningUrl });
export const laundryApi = axios.create({ baseURL: laundryUrl });
export const leaveApi = axios.create({ baseURL: leaveUrl });
