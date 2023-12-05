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

export const studentApi = axios.create({
  baseURL: url + "dashboard/student/",
});

export const faqApi = axios.create({
  baseURL: url + "dashboard/",
});

export const defaulterApi = axios.create({
  baseURL: url + "dashboard/",
});

export const exportApi = axios.create({
  baseURL: url + "dashboard/export/",
});

export const importApi = axios.create({
  baseURL: url + "dashboard/import/",
});

export const otherApi = axios.create({
  baseURL: url,
});
