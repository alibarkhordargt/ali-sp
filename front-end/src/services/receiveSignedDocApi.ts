import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLoading } from '../store/slices/loadingSlice';
import { showSnackbar } from '../store/slices/snackbarSlice';
import { receiveSignedDocReqDto } from '../types/dtos';

export const receiveSignedDocApi = createApi({
  reducerPath: 'receiveSignedDocApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['ReceiveSignedDoc'],
  endpoints: (builder) => ({
    receiveSignedDoc: builder.mutation({
      query: ({ trackId }: receiveSignedDocReqDto) => ({
        url: '/receive-signed',
        method: 'POST',
        body: { trackId },
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        dispatch(setLoading(true));
        try {
          await queryFulfilled;
        } catch (error) {
          dispatch(showSnackbar('Error downloading document!'));
        } finally {
          dispatch(setLoading(false));
        }
      },
    }),
  }),
});

export const { useReceiveSignedDocMutation } = receiveSignedDocApi;
