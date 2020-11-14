import { makeStyles } from "@material-ui/core";

export const useMessageStyles = makeStyles({
  root: {
    "& .MuiAlert-root": {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(#33, 105, 135, .3)",
    },
    "& .MuiAlert-standardInfo": {
      background: "#f3ecc2",
      color: "black",
      "& .MuiSvgIcon-root": {
        color: "black",
      },
    },
    "& .MuiAlert-standardError": {
      background: "#f00",
      color: "white",
      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
    "& .MuiAlert-standardSuccess": {
      background: "#14b1ab ",
      color: "white",
      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
    "& .MuiAlert-standardWarning": {
      background: "#ffb400 ",
      color: "black",
      "& .MuiSvgIcon-root": {
        color: "black",
      },
    },
  },
});
