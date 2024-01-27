import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { store } from './store/index.js';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient({
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </QueryClientProvider>

  </Provider>
)
