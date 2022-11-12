// Página Principal do React.js

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../src/styles/global.css'
import { Header } from '../src/components/Header'
import { SignUpNav } from '../src/components/SignUpNav'
import { Home } from '../src/pages/Home'
import { Appointments } from '../src/pages/Appointments'
import { Pacients } from '../src/pages/SignUp/Pacients'
import { Doctors } from '../src/pages/SignUp/Doctors'
import { Specialties } from '../src/pages/SignUp/Specialties'
// import { App } from '../src/api/App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route exact path='Appointments' element={<Appointments />} />
                <Route exact path='/SignUp/Specialties' element={<><SignUpNav /> <Specialties /></>} />
                <Route exact path='/SignUp/Pacients' element={<><SignUpNav /> <Pacients /></>} />
                <Route exact path='/SignUp/Doctors' element={<><SignUpNav /> <Doctors /></>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)