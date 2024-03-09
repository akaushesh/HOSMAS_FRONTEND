import { useQuery } from "@tanstack/react-query";
const { default: axios } = require("axios");
const { URL } = require("config");

export const useGroups = () => {
  const {
    data: group,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");
        const url = URL + "student/group/view/";
        const getGroupConfig = {
          maxBodyLength: Infinity,
          headers: { Authorization: "Bearer " + jwt },
        };

        const getGroupResponse = await axios.get(url, getGroupConfig);
        return getGroupResponse?.data;
      } catch (err) {
        return null;
      }
    },
    queryKey: ["getGroup"],
  });

  return { group, isLoading, error };
};
