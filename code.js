igrejas = []

let proximoId = 0
const criarId = () => proximoId++

class Igreja {


    constructor(nome, logradouro, telefoneCel, telefoneFixo) {
        this.nome = nome
        this.logradouro = logradouro
        this.telefoneCel = telefoneCel
        this.telefoneFixo = telefoneFixo
    }
}

class Dados {
    membros = []
    constructor(nome, dataNascimento, telefone, email, sexo, estadoCivil, cargo) {
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.telefone = telefone
        this.email = email
        this.sexo = sexo
        this.estadoCivil = estadoCivil
        this.cargo = cargo
        this.id = criaId()
    }




}



const onformIgrejaSubmit = (e) => {
    e.preventDefault()
    const nomeIgreja = document.getElementById('nome-igreja').value
    const enderecoIgreja = document.getElementById('logradouro-igreja').value
    $("#numero-igreja").mask("(99) 99999-9999")
    const telefoneIgrejaCel = document.getElementById('numero-igreja').value
    $("#numero-igreja-fixo").mask("(99) 9999-9999")
    const telefoneIgrejaFixo = document.getElementById('numero-igreja-fixo').value

    document.getElementById('form-igreja').reset()


    if (!nomeIgreja.trim() || !enderecoIgreja.trim() || !telefoneIgrejaCel) return

    const igreja = new Igreja(nomeIgreja, enderecoIgreja, telefoneIgrejaCel, telefoneIgrejaFixo)
    igrejas.push(igreja)

}

document.getElementById('btn-criar-igreja').addEventListener('click', onformIgrejaSubmit)