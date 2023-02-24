import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './i18next';

import App from './App';
import store from './redux/store';
import Sceleton from './components/Sceleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Sceleton />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
