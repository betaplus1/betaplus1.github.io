import React, { useEffect, useState, SyntheticEvent } from "react";
import { ThemeProvider, ThemeProviderProps, useTheme } from "@material-ui/core";
import { darkTheme, theme } from "../../themes";
import { useGlobalState } from "../..";
import { useDarkBackground, useLightBackground } from "./DarkMode.styles";

export const DarkModeProvider = (props: Partial<ThemeProviderProps>) => {
  const DarkMode = useGlobalState((state) => state.DarkMode.DarkMode);
  const DarkBackground = useDarkBackground();
  const LightBackground = useLightBackground();

  return (
    <ThemeProvider theme={DarkMode ? darkTheme : theme}>
      <div className={DarkMode ? DarkBackground.root : LightBackground.root} >
        {props.children}
      </div>
    </ThemeProvider>
  );
};
