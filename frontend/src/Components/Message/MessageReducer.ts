import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertProps } from "@material-ui/lab/Alert";

export type MessageReducer = {
  message?: string;
  type?: AlertProps["severity"];
  autohide?: number | null;
};

export const MessageInitialState: MessageReducer = {
  message: undefined,
  type: undefined,
  autohide: undefined,
};

export const MessageReducer = createSlice({
  name: "Message",
  initialState: MessageInitialState,
  reducers: {
    set: (state, action: PayloadAction<MessageReducer>) => action.payload,
    reset: () => MessageInitialState,
  },
});
