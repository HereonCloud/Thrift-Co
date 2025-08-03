import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/pages/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavMenu from './components/feature/NavigationMenu/NavigationMenu.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
