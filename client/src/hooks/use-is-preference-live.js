import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useIsPreferenceFillingLive = () => {
  const { data: preferenceConfig, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const url = URL + "preferences/status/";
        const jwt = sessionStorage.getItem("jwt");

        const getPreferenceStatusConfig = {
          maxBodyLength: Infinity,
          url: url,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getPreferenceStatusResponse = await axios.get(url, getPreferenceStatusConfig);
        console.log(getPreferenceStatusResponse);
        return getPreferenceStatusResponse?.data;
      } catch (err) {
        return false;
      }
    },
    queryKey: ["isPreferenceFillingLive"],
  });

  return { isLive: preferenceConfig?.is_live, canRetain: preferenceConfig?.can_retain, isLoading };
};
