// Página de Cadastro dos Pacientes

import './style.css'

export function Pacients() {
    return (
        <div className="Pacients">
            <form className="pacientForm">
                <h1 className="pacientFormTitle">Cadastro de Pacientes</h1>
                <fieldset className="personalInfo">
                    <legend>Informações Pessoais</legend>
                    <label className="pacientName">
                        Nome <input type="text" name="name" />
                    </label>
                    <label className="pacientSurname">
                        Sobrenome <input type="text" name="surname" />
                    </label>
                    <label className="cpf">
                        CPF <input type="number" name="cpf" />
                    </label>
                    <label className="telephone">
                        Telefone <input type="number" name="telephone" />
                    </label>
                    <label className="email">
                        E-Mail <input type="email" name="email" />                   
                    </label>
                </fieldset>
                <fieldset className="addressInfo">
                    <legend>Endereço</legend>
                    <label className="cep">
                        CEP <input type="number" name="cep" />
                    </label>
                    <label className="address">
                        Endereço <input type="text" name="address" />
                    </label>
                    <label className="houseNumber">
                        Número <input type="number" name="houseNumber" />
                    </label>
                </fieldset>
                <button className="submitPacient">Enviar</button>
            </form>
        </div>
    )
}