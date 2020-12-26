import { colors, makeStyles, Theme } from "@material-ui/core";
import { darkTheme } from "../../themes";

export const useStaticLoaderStyles = (darkMode: boolean) => makeStyles({
    root: {
        bottom: "0px",
        height: "4px",
        width: "100%",
        "& > div": {
            height: "100%",
            backgroundColor: "rgba(255,7,0,0)!important",
            background: "linear-gradient(90deg, rgba(255,196,0,0.5) 35%, rgba(255,7,0,1) 100%)!important",
        },
    },
    disabled: {
        background: "linear-gradient(90deg, rgba(255,196,0,1) 35%, rgba(255,7,0,1) 100%)",
        bottom: "0px",
        height: "4px",
        width: "100%"
    },
});

