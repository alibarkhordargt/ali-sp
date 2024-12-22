import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLoading } from '../store/slices/loadingSlice';
import { showSnackbar } from '../store/slices/snackbarSlice';
import { sendUnsignedDocReqDto } from '../types/dtos';

export const sendUnsignedDocApi = createApi({
  reducerPath: 'uploadDocApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['UploadDoc'],
  endpoints: (builder) => ({
    sendUnsignedDoc: builder.mutation({
      query: (docWithSignerInf: sendUnsignedDocReqDto) => ({
        url: '/send-unsigned',
        method: 'POST',
        body: docWithSignerInf,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        dispatch(setLoading(true));
        try {
          await queryFulfilled;
        } catch (error) {
          dispatch(showSnackbar('Error uploading document!'));
        } finally {
          dispatch(setLoading(false));
        }
      },
    }),
  }),
});

export const { useSendUnsignedDocMutation } = sendUnsignedDocApi;
