import React from 'react'
import ReactDOM from 'react-dom/client'
import { hydrate, render } from "react-dom";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
