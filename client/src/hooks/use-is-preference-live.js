import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useIsPreferenceFillingLive = () => {
  const { data: isLive } = useQuery({
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
        return getPreferenceStatusResponse?.data?.is_live;
      } catch (err) {
        return false;
      }
    },
    queryKey: ["isPreferenceFillingLive"],
  });

  return { isLive };
};
