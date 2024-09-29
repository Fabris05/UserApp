import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersApp } from './UsersApp.jsx'
import './styles.css'
import { LoginPage } from './auth/pages/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>,
)
