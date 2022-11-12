import './style.css'

export function Specialties() {
    return (
        <div className="Specialties">
            <form className="specialtiesForm" action="" method="POST" enctype="multipart/form-data">
                <h1 className="specialtiesFormTitle">Cadastro da Especialidade</h1>
                <fieldset className="specialties">
                    <legend>Especialidades</legend>
                    <label className="specialty">
                        Especialidade <input type="text" name="specialty" />
                    </label>
                </fieldset>
                <button className="submitSpecialty">Enviar</button>
            </form>
        </div>
    )
}