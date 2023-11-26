import axios from "axios";

export const url = "https://api.hosmas.ccstiet.com/";

export const authApi = axios.create({
  baseURL: url,
});

export const hostelApi = axios.create({
  baseURL: url + "dashboard/hostel/",
});

export const roomTypeApi = axios.create({
  baseURL: url + "dashboard/roomtype/",
});

export const choiceApi = axios.create({
  baseURL: url + "dashboard/choice/",
});

export const sectionApi = axios.create({
  baseURL: url + "dashboard/section/",
});

export const batchApi = axios.create({
  baseURL: url + "dashboard/",
});

export const faqApi = axios.create({
  baseURL: url + "dashboard/",
});

export const defaulterApi = axios.create({
  baseURL: url + "dashboard/",
});

export const otherApi = axios.create({
  baseURL: url,
});

// export const addAccessTokenToRequests = (accessToken) => {
//   console.log("Tokens added");
//   authApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   hostelApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   roomTypeApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   choiceApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   sectionApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   batchApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
// };
