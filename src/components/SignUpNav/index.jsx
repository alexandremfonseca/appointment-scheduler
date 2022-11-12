import { Link } from "react-router-dom"

import './style.css'

export function SignUpNav() {
    return (
        <div className="SignUpNav">
            <ul className="Navigation">
                <li>
                    <Link to='/SignUp/Specialties' className="Link">Especialidades</Link>
                </li>
                <li>
                    <Link to='/SignUp/Doctors' className="Link">Médicos</Link>
                </li>
                <li>
                    <Link to='/SignUp/Pacients' className="Link">Pacientes</Link>
                </li>
            </ul>
        </div>
    )
}