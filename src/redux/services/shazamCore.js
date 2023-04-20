/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "639b9f7098msh1ea9e977655facfp1caa26jsn39af68403727"
      );
      headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetTopChartsQuery } = shazamApi;
