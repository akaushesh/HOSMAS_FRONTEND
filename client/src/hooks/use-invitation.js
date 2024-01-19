import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

export const useInvitation = () => {
  const {
    data: requests,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => {
      const jwt = sessionStorage.getItem("jwt");
      const getProfileConfig = {
        maxBodyLength: Infinity,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      const newURL = URL + "student/invitation/view/received/";

      const getProfileResponse = await axios.get(newURL, getProfileConfig);
      console.log(getProfileResponse);
      return getProfileResponse?.data;
    },
    queryKey: ["getInvitation"],
  });

  return { requests, isError, isLoading };
};
