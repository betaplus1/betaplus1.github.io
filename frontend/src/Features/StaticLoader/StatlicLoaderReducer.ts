import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StaticLoaderReducer = boolean;

export const StaticLoaderInitialState: StaticLoaderReducer = false;

export const StaticLoaderReducer = createSlice({
  name: "StaticLoader",
  initialState: StaticLoaderInitialState,
  reducers: {
    set: (state, action: PayloadAction<StaticLoaderReducer>) => action.payload,
    reset: () => StaticLoaderInitialState,
  },
});
