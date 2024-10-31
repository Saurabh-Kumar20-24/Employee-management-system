import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Context/AuthProvider.jsx'


// this command is used to clear local storage
//localStorage.clear()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
        <AuthProvider>
        <App />
        </AuthProvider>
   
  </React.StrictMode>,
)