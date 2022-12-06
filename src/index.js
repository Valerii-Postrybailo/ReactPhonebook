import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'components/App';
import './index.css';

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor} from "./redux/store";
import { store } from './redux/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
