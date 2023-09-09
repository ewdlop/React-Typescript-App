import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../stores/store';

//baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),

// export const pokemonApi = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     tagTypes: [],
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query({
//             query: (name) => `pokemon/${name}`,
//         }),
//         updatePokemon: builder.mutation({
//             query: ({ name, patch }) => ({
//               url: `pokemon/${name}`,
//               // When performing a mutation, you typically use a method of
//               // PATCH/PUT/POST/DELETE for REST endpoints
//               method: 'PATCH',
//               // fetchBaseQuery automatically adds `content-type: application/json` to
//               // the Headers and calls `JSON.stringify(patch)`
//               body: patch,
//             }),
//           })
//     }),
// });

export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://localhost:7241',
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
        getPokemonByName: builder.query({
            query: () => ({
                url: 'test/',
                method: 'GET',
            }),
        }),
    }),
});



export const { useGetPokemonByNameQuery } = pokemonApi;
