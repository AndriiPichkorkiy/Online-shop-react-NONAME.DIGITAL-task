import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const PUBLIC_URL = process.env.PUBLIC_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + PUBLIC_URL,
        }}
      >
        <HashRouter>
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
        </HashRouter>
      </Auth0Provider>
    </PersistGate>
  </Provider>
);

//basename="https://AndriiPichkorkiy.github.io/Online-shop-react-task"
