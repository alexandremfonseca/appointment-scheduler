import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from '../src/components/Header'
import { Pacients } from '../src/pages/Pacients'
import { SignupNavBar } from '../src/components/SignupNavBar'
import '../src/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SignupNavBar />
    <Pacients />
  </React.StrictMode>
)