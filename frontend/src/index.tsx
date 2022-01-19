import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// FAKE API
import './services/mirage'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
