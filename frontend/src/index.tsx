import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Router, Switch, Route } from "react-router-dom";
import { Message } from "./Components";
import { createBrowserHistory } from "history";
import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
  ThunkAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector,
  shallowEqual,
  Provider,
} from "react-redux";
import {
  MessageInitialState,
  MessageReducer,
} from "./Components/Message/MessageReducer";
import {
  DarkModeInitialState,
  DarkModeReducer,
} from "./Features/DarkMode/DarkModeReducer";
import { StaticLoader, StaticLoaderReducer } from './Features';
import { Main } from "./Pages";
import { Topbar } from "./Components/Topbar";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./themes";
import { DarkModeProvider } from "./Features/DarkMode";

//#region redux configuration
export const GlobalInitialState = {
  Message: MessageInitialState,
};

const GlobalReducer = combineReducers({
  Message: MessageReducer.reducer,
  DarkMode: DarkModeReducer.reducer,
  StaticLoader: StaticLoaderReducer.reducer,
});

const customizedMiddleware = getDefaultMiddleware({ serializableCheck: false });

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
});

if (process.env.NODE_ENV === "development") {
  customizedMiddleware.push(loggerMiddleware);
}

const store = configureStore({
  reducer: GlobalReducer,
  middleware: customizedMiddleware,
});

export type GlobalDispatch = typeof store.dispatch;
export const useGlobalDispatch = () => useDispatch<GlobalDispatch>();
export type GlobalState = ReturnType<typeof GlobalReducer>;
export const useGlobalState: TypedUseSelectorHook<GlobalState> = (selector) =>
  useSelector(selector);
export type ThunkResult<R> = ThunkAction<R, GlobalState, undefined, AnyAction>;

//#endregion

const history = createBrowserHistory();

ReactDOM.render(
  <>
    <Provider store={store}>
      <DarkModeProvider>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </DarkModeProvider>
    </Provider>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
