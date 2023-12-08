import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useCurrentPreference = () => {
  const { data: currentPreferences } = useQuery({
    queryFn: async () => {
      try {
        const url = URL + "preferences/getPreference/";
        const jwt = sessionStorage.getItem("jwt");

        const getCurrentPreferencesConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getCurrentPreferencesResponse = await axios.get(url, getCurrentPreferencesConfig);
        return getCurrentPreferencesResponse?.data?.data;
      } catch (err) {
        return [];
      }
    },
    queryKey: ["getCurrentPreferences"],
  });

  return { currentPreferences };
};
