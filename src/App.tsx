import CssBaseline from "@material-ui/core/CssBaseline";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import Landing from "./containers/Landing";
import NoteDetail from "./containers/NoteDetail";
import { history, store } from "./store";
import { Routes } from "./utils/routes";

export default () => (
  <Provider store={store}>
    <CssBaseline />
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={Routes.LANDING} component={Landing} />
        <Route exact path={Routes.NOTE_DETAIL} component={NoteDetail} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
