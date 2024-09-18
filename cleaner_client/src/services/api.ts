import axios from "axios";

const centralUrl = "https://central.hosmas.ccstiet.com";
const cleaningUrl = "https://cleaning.hosmas.ccstiet.com";

export const hostelApi = axios.create({
  baseURL: `${centralUrl}/hostels/`,
});

export const cleaningApi = axios.create({
  baseURL: cleaningUrl,
});
