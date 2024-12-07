// src/services/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }), // Assuming NestJS API is running locally
  endpoints: (builder) => ({
    // Existing endpoints here

    // Add signDocument endpoint
    signDocument: builder.mutation({
      query: (signData) => ({
        url: '/sign',
        method: 'POST',
        body: signData,
      }),
    }),
  }),
});

export const { useSignDocumentMutation } = apiSlice;
