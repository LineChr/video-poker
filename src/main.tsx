import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import PlayerSelect from './pages/PlayerSelect.tsx'
import Rules from './pages/Rules.tsx'
import Header from './components/Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/playerselect" element={<PlayerSelect/>} />
        <Route path="/rules" element={<Rules/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
