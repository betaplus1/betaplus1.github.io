import { makeStyles } from "@material-ui/core";

export const useTopBarStyles = makeStyles({
  root: {
    background: "linear-gradient(145deg, #555 30%, #444 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(#33, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
