import './style.css'

export function Appointments() {
    return (
        <div className="Appointments">
            <form className="appointmentForm" action="" method="POST" enctype="multipart/form-data">
                <h1 className="appointmentFormTitle">Agendamento de Consulta</h1>
                <fieldset className="pacientInfo">
                    <legend>Informações do Paciente</legend>
                    <label className="pacientName">
                        Nome <input type="text" name="pacientName" />
                    </label>
                    <label className="pacientSurname">
                        Sobrenome <input type="text" name="pacientSurname" />
                    </label>
                </fieldset>
                <fieldset className="doctorInfo">
                    <legend>Informações do Médico</legend>
                    <label className="doctorName">
                        Nome <input type="text" name="doctorName" />
                    </label>
                    <label className="doctorSurname">
                        Sobrenome <input type="text" name="doctorSurname" />
                    </label>
                </fieldset>
                <fieldset className="appointmentInfo">
                    <legend>Informações de Agendamento</legend>
                    <label className="date">
                        Data <input type="text" name="date" />
                    </label>
                    <label className="time">
                        Horário <input type="text" name="time" />
                    </label>
                </fieldset>
                <button className="submitAppointment">Enviar</button>
            </form>
        </div>
    )
}