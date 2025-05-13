import { Provider } from "@/components/ui/provider"
import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Theme } from "@chakra-ui/react"
import{ BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Theme appearance = "dark">
          <App />
       </Theme>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)

/**createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)**/
