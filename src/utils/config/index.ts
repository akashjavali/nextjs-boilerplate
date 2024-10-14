'use client';
import axios from 'axios';
import { API_SERVER_URL } from '@constants';

const axiosClient = axios.create({
  baseURL: API_SERVER_URL,
});

/**
 * Base get api
 */
export const getApi = (url: string) => axiosClient.get(url);

/**
 * Base post api
 */
export const postApi = (url: string, data: any) => axiosClient.post(url, data);

/**
 * Base put api
 */
export const putApi = (url: string, data?: any) => axiosClient.put(url, data);

/**
 * Base patch api
 */
export const patchApi = (url: string, data?: any) =>
  axiosClient.patch(url, data);

/**
 * Base delete api
 */
export const deleteApi = (url: string) => axiosClient.delete(url);
