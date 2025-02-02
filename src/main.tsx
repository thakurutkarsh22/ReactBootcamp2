import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HelloComponent from './1.Intro/HelloComponent.tsx'
import RoutingApp from './11.Routing/RoutingApp.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <App />,

    <BrowserRouter>
      <RoutingApp />
    </BrowserRouter>
  // </StrictMode>,
)
