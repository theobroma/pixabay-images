import { createApi } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../@api/api';
import { axiosBaseQuery } from '../../@api/axiosBaseQuery';
import { PicturesDataResponseType } from '../../@types';

export const picturesApi = createApi({
  reducerPath: 'picturesApi',
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPictures: builder.query<PicturesDataResponseType, number>({
      query: (page) => ({
        url: `/?q=nature&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
        method: 'get',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPicturesQuery } = picturesApi;
