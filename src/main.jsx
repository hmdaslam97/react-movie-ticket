import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './AppRoute.jsx'
import {Provider} from "react-redux"
import store from './helper/Store.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>,
)
