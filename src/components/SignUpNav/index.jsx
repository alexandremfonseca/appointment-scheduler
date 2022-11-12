import { Link } from "react-router-dom"

import './style.css'

export function SignUpNav() {
    return (
        <div className="SignUpNav">
            <ul className="Navigation">
                <li>
                    <Link to='/' className="Link">Especialidades</Link>
                </li>
                <li>
                    <Link to='Doctors' className="Link">Médicos</Link>
                </li>
                <li>
                    <Link to='Pacients' className="Link">Pacientes</Link>
                </li>
            </ul>
        </div>
    )
}