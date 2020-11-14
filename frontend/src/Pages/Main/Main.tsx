import React from "react";
import { useMainStyles } from "./Main.styles";

export const Main = () => {
  const classes = useMainStyles();
  return <div className={classes.root}>content</div>;
};
