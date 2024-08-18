import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './style/main.css'

const queryClient = new QueryClient();

const toastOptions = {
  style: {
      fontFamily: `"Inter", sans-serif`, 
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Toaster position="top-center" toastOptions={toastOptions} />
              <RouterProvider router={router} />
          </PersistGate>
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
)
