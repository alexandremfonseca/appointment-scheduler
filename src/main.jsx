import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../src/styles/global.css'
import { Header } from '../src/components/Header'
import { Pacients } from '../src/pages/Pacients'
import { Doctors } from '../src/pages/Doctors'
import { Specialties } from '../src/pages/Specialties'
import { SignUpNav } from '../src/components/SignUpNav'
import { Appointments } from '../src/pages/Appointments'
import { Home } from '../src/pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
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