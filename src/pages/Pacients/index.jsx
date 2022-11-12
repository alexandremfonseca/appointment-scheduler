import './style.css'

export function Pacients() {
    return (
        <div className="Pacients">
            <form className="pacientForm" action="" method="POST" enctype="multipart/form-data">
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
                        CPF <input type="text" name="cpf" />
                    </label>
                    <label className="telephone">
                        Telefone <input type="text" name="telephone" />
                    </label>
                    <label className="email">
                        E-Mail <input type="text" name="email" />                   
                    </label>
                </fieldset>
                <fieldset className="addressInfo">
                    <legend>Endereço</legend>
                    <label className="cep">
                        CEP <input type="text" name="cep" />
                    </label>
                    <label className="address">
                        Endereço <input type="text" name="address" />
                    </label>
                    <label className="houseNumber">
                        Número <input type="text" name="houseNumber" />
                    </label>
                </fieldset>
                <button className="submitPacient">Enviar</button>
            </form>
        </div>
    )
}