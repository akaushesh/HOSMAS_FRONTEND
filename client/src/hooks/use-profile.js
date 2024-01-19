import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useProfile = () => {
  const { data: user } = useQuery({
    queryFn: async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");
        if (!jwt) return null;
        const getProfileConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const newURL = URL + "student/profile/";

        const getProfileResponse = await axios.get(newURL, getProfileConfig);
        return getProfileResponse?.data;
      } catch (err) {
        return null;
      }
    },
    queryKey: ["getProfile"],
  });

  return { user };
};
