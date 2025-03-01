import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HelloComponent from './1.Intro/HelloComponent.tsx'
import RoutingApp from './11.Routing/RoutingApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import ContextAPiReactApp from './12.ContextApi/ContextAPiReactApp.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <App />,

    // <BrowserRouter>
    //   <RoutingApp />
    // </BrowserRouter>
    <ContextAPiReactApp />
  // </StrictMode>,
)
