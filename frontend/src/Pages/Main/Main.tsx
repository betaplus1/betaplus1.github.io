import React, { useEffect } from "react";
import { useMainStyles, useMainStylesDark } from "./Main.styles";
import { Button, Paper, Typography, useTheme } from '@material-ui/core';
import { useGlobalDispatch, useGlobalState } from "../..";
import { DarkModeReducer } from "../../Features/DarkMode/DarkModeReducer";
import { DarkModeSwitch, StaticLoader } from "../../Features";
import MemoryIcon from '@material-ui/icons/Memory';

export const Main = () => {
  const classes = useMainStyles();
  const classesDark = useMainStylesDark();
  const DarkMode = useGlobalState(state => state.DarkMode.DarkMode);

  return <div style={{ position: "relative" }}>
    <Paper style={{ display: "flex", alignItems: "center", margin: "0", justifyContent: "space-between" }}>
      <div>
        <Button><MemoryIcon style={{ marginRight: "6px" }} />Betaplus1</Button >
      </div>
      <div>
        <Button disabled>Blog</Button >
        <Button disabled>Portfolio</Button >
        <Button disabled>Gallery</Button >

        <Button disabled>About</Button >
        <Button disabled>Contact</Button >

      </div>
      <div>
        <Button disabled>Login</Button>
        <DarkModeSwitch />
      </div>
    </Paper>
    <StaticLoader />

  </div>;
};
