import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Globalstyled } from './globalstyled.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyled/>
    <App />
  </React.StrictMode>,
)
