import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DarkModeReducer = {
  DarkMode?: boolean;
};

export const DarkModeInitialState: DarkModeReducer = {
  DarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
};

export const DarkModeReducer = createSlice({
  name: "DarkMode",
  initialState: DarkModeInitialState,
  reducers: {
    set: (state, action: PayloadAction<DarkModeReducer['DarkMode']>) => ({
      ...state,
      DarkMode: action.payload,
    }),
    toggle: (state) => ({
      ...state,
      DarkMode: !state.DarkMode,
    }),
    reset: () => DarkModeInitialState,
  },
});
