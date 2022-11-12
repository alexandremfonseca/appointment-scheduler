import './App.css'
import Api from './Api'

export function App() {

    const handleEnviar = async (e) => {
        e.preventDefault()
        alert(await (Api.enviar(e.target.nome.value, e.target.email.value, e.target.msg.value)))
    }

    return (
        <div className="App">
            <form className="form-login" onSubmit={handleEnviar}>
                <input type="text" name="nome" placeholder='Seu nome' />
                <input type="email" name="email" placeholder='Seu e-mail' />
                <textarea name="msg" placeholder='Sua mensagem'></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}