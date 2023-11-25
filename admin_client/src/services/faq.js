import { faqApi } from "./api";

export const createFaq = async (data, accessToken) => {
  const res = await faqApi.post("createFAQ/", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const getFaq = async (accessToken) => {
  const res = await faqApi.get("getFAQ/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const updateFaq = async (id, data, accessToken) => {
  const res = await faqApi.post(`updateFAQ/`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const deleteFaq = async (id, accessToken) => {
  console.log("test ", accessToken, id);
  const res = await faqApi.post(
    "deleteFAQ/",
    { id: id },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};
