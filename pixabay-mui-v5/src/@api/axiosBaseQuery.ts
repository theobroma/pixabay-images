// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { PicturesDataResponseSchema } from '../@types';
import { waitForMe } from '../@utils/waitforme';
import { pixabayAxiosInstance } from './api';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      await waitForMe(1000);
      const res = await pixabayAxiosInstance({
        url: baseUrl + url,
        method,
        data,
      });
      // ZOD validation
      try {
        PicturesDataResponseSchema.parse(res.data);
      } catch (error) {
        // TODO:
        // Log & alert error <-- very important!
        console.log(error);
      }

      return { data: res.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
