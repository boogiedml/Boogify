/* eslint-disable quotes */
import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamApi } from "./services/shazamCore";
import { billboardApi } from "./services/billboard";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    [billboardApi.reducerPath]: billboardApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(shazamApi.middleware)
    .concat(billboardApi.middleware),
});
