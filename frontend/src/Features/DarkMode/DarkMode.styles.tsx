import { makeStyles } from "@material-ui/core";

export const useDarkBackground = makeStyles({
    root: {
        maxWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#333",
        background:
            "url(http://api.thumbr.it/whitenoise-361x370.png?background=303030ff&noise=ffffff&density=50&opacity=5)",
    },
});

export const useLightBackground = makeStyles({
    root: {
        maxWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#fff",
        background:
            "url(http://api.thumbr.it/whitenoise-361x370.png?background=f3f3f3ff&noise=000000&density=50&opacity=5)",
    },
});

