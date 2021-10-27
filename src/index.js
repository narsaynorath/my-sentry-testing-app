import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import './index.css';
import App from './App';


Sentry.init({
  dsn: "https://25ad4c6524574802a12b5d3e4758cc6b@o1052590.ingest.sentry.io/6036357",
  release: process.env.RELEASE,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
