import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./../public/components/header/header.tsx";
import App from './App.tsx'
import Footer from './../public/components/footer/footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
