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
        return getPreferenceStatusResponse?.data;
      } catch (err) {
        return false;
      }
    },
    queryKey: ["isPreferenceFillingLive"],
  });

  return { isLive: preferenceConfig?.is_live, canRetain: preferenceConfig?.can_retain, isLoading };
};

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
