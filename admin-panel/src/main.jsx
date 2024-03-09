import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

import { store, persistor } from './app/Store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>

        <App />

      </PersistGate>

    </Provider>

  </React.StrictMode>,
);
