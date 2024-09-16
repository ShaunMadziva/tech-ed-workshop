import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddButton from './components/AddButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AddButton />
  </StrictMode>,
)
