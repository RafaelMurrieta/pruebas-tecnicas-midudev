import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './navbar.tsx'
import Search from './search.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('navbar')!).render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('search')!).render(
  <React.StrictMode>
    <Search/>
  </React.StrictMode>
)