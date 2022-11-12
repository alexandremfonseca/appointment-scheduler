import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../src/styles/global.css'
import { Header } from '../src/components/Header'
import { Pacients } from '../src/pages/Pacients'
import { Doctors } from '../src/pages/Doctors'
import { Specialties } from '../src/pages/Specialties'
import { SignUpNav } from '../src/components/SignUpNav'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <SignUpNav />
            <Routes>
                <Route index element={<Specialties />} />
                <Route exact path='/Pacients' element={<Pacients />} />
                <Route exact path='/Doctors' element={<Doctors />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)