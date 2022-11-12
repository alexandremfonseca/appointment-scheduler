export function Api() {
        
    const enviar = async(nome, email, msg) => {
        let contato = {
            nome,
            email,
            msg
        }

        let requisicao = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contato)
        }

        const response = await fetch('http://localhost:3306/rolodex/contacts', requisicao)
        const data = await response.json()

        return data.msg
    }
}