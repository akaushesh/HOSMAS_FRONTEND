import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useAvailableChoices = () => {
  const { data: availableChoices } = useQuery({
    queryFn: async () => {
      try {
        const url = URL + "preferences/getChoices/";
        const jwt = sessionStorage.getItem("jwt");

        const getAvailableChoicesConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const availableChoicesResponse = await axios.get(url, getAvailableChoicesConfig);
        return availableChoicesResponse?.data;
      } catch (err) {
        return [];
      }
    },
    queryKey: ["getAvailablePreferences"],
  });

  return { availableChoices };
};
