import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useLevels = () => {
  const { data: levels } = useQuery({
    queryFn: async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");
        if (!jwt) return null;
        const getLevelsConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const newURL = URL + "preferences/alloted-hostel-levels/";
        console.log(newURL);

        const getLevels = await axios.get(newURL, getLevelsConfig);
        return getLevels?.data;
      } catch (err) {
        return err;
      }
    },
    queryKey: ["getLevels"],
  });

  return { levels };
};
