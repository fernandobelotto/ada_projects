import { createStandaloneToast } from "@chakra-ui/react";
import type { AxiosError, AxiosInstance } from "axios";
import Axios from "axios";

import { store } from "../store";

export default function getInstance(): AxiosInstance {
  const state = store.getState();
  const toast = createStandaloneToast();

  const { accessToken } = state.session;

  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    timeout: 30_000,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      toast({
        description: `Message: ${error.message}`,
        duration: 3000,
        status: "error",
        title: "Request Error",
      });
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

export function handleSessionError(err: AxiosError | unknown): boolean {
  const toast = createStandaloneToast();

  if ((err as AxiosError)?.response?.status === 401) {
    toast({
      description: "Your session is expired, please sign in again",
      duration: 3000,
      status: "error",
      title: "Session Expired",
    });

    return true;
  }
  return false;
}
