import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useLevels = () => {
  const { data: levels } = useQuery({
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

        const newURL = URL + "preferences/alloted-hostel-levels/";

        const getLevels = await axios.get(newURL, getProfileConfig);
        console.log(getLevels);
        return getLevels?.data;
      } catch (err) {
        return null;
      }
    },
    queryKey: ["getProfile"],
  });

  return { levels };
};
