import './App.css'
import axios from 'axios'

export function App() {

    const enviar = async(nome, email, msg) => {
        let contato = {
            nome,
            email,
            msg
        }

        axios.post('http://localhost:3306/rolodex/contacts', contato)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }

    const handleEnviar = async(e) => {
        e.preventDefault()
        alert(await (enviar(e.target.name.value, e.target.email.value, e.target.msg.value)))
    } 

    return (
        <div className="App" onSubmit={handleEnviar}>
            <form className="form-login" >
                <input type="text" name="name" placeholder='Seu nome' />
                <input type="email" name="email" placeholder='Seu e-mail' />
                <textarea name="msg" placeholder='Sua mensagem'></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}