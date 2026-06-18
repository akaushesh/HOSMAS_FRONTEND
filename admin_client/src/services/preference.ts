import type { AxiosResponse } from 'axios';

export interface Choice {
  id: number;
  room_name: string;
  room_hostel: string;
}

export interface Preference {
  id: number;
  room_type_name: string;
  hostel_name: string;
  priority: number;
}

export interface PreferenceData {
  retain: boolean;
  preferences: Preference[];
}

export interface PreferenceResponse {
  status: string;
  data: PreferenceData;
}

export interface PreferenceStatusResponse {
  is_live: string;
  can_retain: string;
}

export interface Levels {
  level_no: number;
  layout_image: string;
}

export interface LevelsResponse {
  room_capacity: number;
  levels: Levels[];
}

export const getChoices = async (): Promise<AxiosResponse<Choice[]>> => {
  throw new Error('Not implemented');
};

export const getPreference = async (): Promise<AxiosResponse<PreferenceResponse>> => {
  throw new Error('Not implemented');
};

export const getPreferenceStatus = async (): Promise<AxiosResponse<PreferenceStatusResponse>> => {
  throw new Error('Not implemented');
};

export const getAllLevel = async (): Promise<AxiosResponse<LevelsResponse>> => {
  throw new Error('Not implemented');
};
