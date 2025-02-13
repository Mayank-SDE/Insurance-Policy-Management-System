import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App.jsx'
import counterStore from './store/index';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}>
    <App />
    </Provider>
  </StrictMode>,
)
