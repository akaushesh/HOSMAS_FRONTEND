import axios from "axios";

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


export const hostelApi = axios.create({
  baseURL: `${centralUrl}hostels/`,
});

export const cleaningApi = axios.create({
  baseURL: cleaningUrl,
});
