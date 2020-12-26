import React, { useState } from 'react'
import { LinearProgress, useTheme } from "@material-ui/core";
import { useStaticLoaderStyles } from "./StaticLoader.styles";
import { useGlobalState } from '../..';

export const StaticLoader = () => {
    const theme = useTheme();
    const DarkMode = useGlobalState((state) => state.DarkMode.DarkMode || false);

    const classes = useStaticLoaderStyles(DarkMode);
    // const active = useGlobalState(state => state.StaticLoader);
    const [active, setActive] = useState(true);
    const className = active ? classes().root : classes().disabled;


    return (
        <div className={className} onClick={() => setActive(!active)} >
            {active && <LinearProgress color="primary" />}
        </div>
    )
}