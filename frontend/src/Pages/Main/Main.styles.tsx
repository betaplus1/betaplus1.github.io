import { makeStyles } from "@material-ui/core";

export const useMainStyles = makeStyles({
  root: {
    maxWidth: "100vw",
    minHeight: "300vh",
    backgroundColor: "#333",
    background:
      "url(http://api.thumbr.it/whitenoise-361x370.png?background=303030ff&noise=ffffff&density=50&opacity=5)",
  },
});

export const useMainStylesDark = makeStyles({
  root: {
    maxWidth: "100vw",
    minHeight: "300vh",
    backgroundColor: "#333",
    background:
      "url(http://api.thumbr.it/whitenoise-361x370.png?background=f3f3f3ff&noise=000000&density=50&opacity=5)",
  },
});

