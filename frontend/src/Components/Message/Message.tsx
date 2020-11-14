import React, { useEffect, useState, SyntheticEvent } from "react";
import { useGlobalDispatch, useGlobalState } from "../..";
import { MessageReducer } from "./MessageReducer";
import { Snackbar } from "@material-ui/core";
import Alert, { AlertProps } from "@material-ui/lab/Alert";
import { useMessageStyles } from "./Message.styles";

export const Message = () => {
  const dispatch = useGlobalDispatch();
  const { message, type, autohide } = useGlobalState((state) => state.Message);
  const [errorOpen, toggleErrorOpen] = useState(false);

  useEffect(() => {
    dispatch(
      MessageReducer.actions.set({ message: "testing redux...", type: "info" })
    );
    setTimeout(
      () =>
        dispatch(
          MessageReducer.actions.set({
            message: "ok",
            type: "success",
            autohide: 5000,
          })
        ),
      2000
    );
  }, []);

  useEffect(() => {
    if (message) {
      toggleErrorOpen(true);
    }
  }, [message]);

  const handleClose = (
    event: SyntheticEvent<Element, Event>,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    toggleErrorOpen(false);
    setTimeout(() => dispatch(MessageReducer.actions.reset()), 100);
  };

  const classes = useMessageStyles();

  return (
    <Snackbar
      className={classes.root}
      open={errorOpen}
      autoHideDuration={autohide}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity={type || "info"} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};
