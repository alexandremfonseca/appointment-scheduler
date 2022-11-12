import { Link } from "react-router-dom"

import './style.css'

export function Home() {
    return (
        <div className="Home">
            <section className="welcomeMessage">
                <h1>Seja bem-vindo à plataforma de agendamento de consultas!</h1>
                <p>Clique em <strong><Link to='/Appointments' className='Link'>Agendamento</Link></strong> para agendar sua consulta ou em <strong><Link to='/SignUp/Specialties' className='Link'>Cadastro</Link></strong> para cadastrar especialidades médicas, médicos ou pacientes!</p>
            </section>
        </div>
    )
}