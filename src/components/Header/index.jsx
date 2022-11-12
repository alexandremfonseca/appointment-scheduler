import { Link } from "react-router-dom"

import './style.css'

export function Header() {
    return (
        <div className='Header'>
            <ul className='Navigation'>
                <li>
                    <Link to='/' className="Link">Home</Link>
                </li>
                <li>
                    <Link to='/Appointments' className="Link">Agendamento</Link>
                </li>
                <li>
                    <Link to='/SignUp/Specialties' className="Link">Cadastro</Link>
                </li>
            </ul>
        </div>
    )
}
  