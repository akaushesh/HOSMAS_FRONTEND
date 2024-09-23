import { AxiosResponse } from "axios";
import { cleaningApi } from "./api";

export type CleanersResponse = CleanerResponse[];

interface CleanerResponse {
  id: number;
  name: string;
  phone: string;
  photo: string;
  hostelId: string;
}

export const getCleanersFromHostel = async (
  hostelId: string
): Promise<AxiosResponse<CleanersResponse>> => {
  const res = await cleaningApi.get(`/hostels/${hostelId}/workers/`);
  return res;
};
