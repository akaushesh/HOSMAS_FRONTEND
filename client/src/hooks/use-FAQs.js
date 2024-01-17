import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useFAQs = () => {
  const { data: FAQs = [], isLoading } = useQuery({
    queryFn: async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");
        const url = URL + "dashboard/getFAQ/";

        const getFAQsConfig = {
          maxBodyLength: Infinity,
          url: url,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getFAQsResponse = await axios.get(url, getFAQsConfig);
        return getFAQsResponse?.data;
      } catch (err) {
        return [];
      }
    },
    queryKey: ["getFAQs"],
  });

  return { FAQs, isLoading };
};
