import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../stores/store';

export const helloWorldApi = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            // Use the getState function to get the current state
            const token = (getState() as RootState).auth.token

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          },
    }),
    tagTypes: [],

    endpoints: (builder) => ({
        getTest: builder.query({
            query: () => ({
                url: 'test/',
                method: 'GET',
            }),
        }),
    }),
});

//export const { useGetTest } = helloWorldApi;