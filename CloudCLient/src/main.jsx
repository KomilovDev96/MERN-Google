import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import "@/style/style.scss"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
)
