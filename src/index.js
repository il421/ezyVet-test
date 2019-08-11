import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.css';
import App from './components/App';

import configStore from './store/configStore';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes, faCartPlus, faTrashAlt);

const {store, persistor} = configStore();

const app = (
  <Provider store={ store }>
    <PersistGate loading={null} persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
