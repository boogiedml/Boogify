/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const billboardApi = createApi({
  reducerPath: "billboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://billboard3.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "639b9f7098msh1ea9e977655facfp1caa26jsn39af68403727"
      );
      headers.set("X-RapidAPI-Host", "billboard3.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopBillboard100: builder.query({
      query: ({ date }) => `/hot-100?id=${date}&range=1-100`,
    }),
  }),
});

export const { useGetTopBillboard100Query } = billboardApi;
