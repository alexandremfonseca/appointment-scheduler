// Página de Cadastro dos Médicos

import './style.css'

export function Doctors() {
    return (
        <div className="Doctors">
            <form className="doctorForm">
                <h1 className="doctorFormTitle">Cadastro de Médicos</h1>
                <fieldset className="personalInfo">
                    <legend>Informações Pessoais</legend>
                    <label className="doctorName">
                        Nome <input type="text" name="name" />
                    </label>
                    <label className="doctorSurname">
                        Sobrenome <input type="text" name="surname" />
                    </label>
                    <label className="specialty">
                        Especialidade <input type="text" name="specialty" />
                    </label>
                    <label className="crm">
                        CRM <input type="number" name="crm" />
                    </label>
                </fieldset>
                <button className="submitDoctor">Enviar</button>
            </form>
        </div>
    )
}