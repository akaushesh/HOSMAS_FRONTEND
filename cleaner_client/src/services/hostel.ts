import { AxiosResponse } from "axios";
import { hostelApi } from "./api";

export type Root = Root2[];

export interface Root2 {
  id: number;
  name: string;
  image_url: string;
  blocks: Block[];
}

export interface Block {
  id: number;
  name: string;
  levels: Level[];
}

export interface Level {
  id: number;
  name: string;
}

export const getAllHostels = async (): Promise<AxiosResponse<Root>> => {
  const res = await hostelApi.get("/all/");
  return res;
};
