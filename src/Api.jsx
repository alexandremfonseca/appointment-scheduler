export default {
    enviar: async(nome, email, msg) => {
        let contato = {
            nome,
            email,
            msg
        }

        let requisicao = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(contato)
        }

        const response = await fetch('http://localhost/libraries/serc/api')
        const data = await response.json()

        return data.msg
    }
}