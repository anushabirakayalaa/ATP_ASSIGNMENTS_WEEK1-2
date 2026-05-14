import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterContextProvider from './contexts/CounterContextProvider.jsx'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './contexts/UserContextProvider.jsx'
createRoot(document.getElementById('root')).render(
   <UserContextProvider>
    <CounterContextProvider>
      {/* wrap root component with provider */}
      <App />
    </CounterContextProvider>
    
   </UserContextProvider>,
)
