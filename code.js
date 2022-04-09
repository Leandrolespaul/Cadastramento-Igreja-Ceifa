
let membros = []

let proximoId = 0
const criarId = () => proximoId++

class Igreja {


    constructor(nome, logradouro, telefoneCel) {
        this.nome = nome
        this.logradouro = logradouro
        this.telefoneCel = telefoneCel
        
    }
}

class Dados {
    

    constructor(nome, dataNascimento, telefone, email, sexo, estadoCivil, cargo) {
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.telefone = telefone
        this.email = email
        this.sexo = sexo
        this.estadoCivil = estadoCivil
        this.cargo = cargo
        this.id = criarId()
    }





}


const templo = new Igreja('Igreja Ceifa em Sumidouro', 'Rua 10 de Junho', '(99) 9999-99999')


const onformIgrejaSubmit = (e) => {
 e.preventDefault()
    const nome = document.getElementById('nome').value
    const datsNascimento = document.getElementById('dataNascimento').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const sexo = document.getElementById('select-sexo').value
    const estadoCivil = document.getElementById('select-estado-civil').value
    const cargo = document.getElementById('select-cargo').value

    const pessoas = new Dados(nome, datsNascimento, telefone, email, sexo, estadoCivil, cargo )
    membros.push(pessoas)

    document.getElementById('form-igreja').reset()
}

document.getElementById('btn-enviar').addEventListener('click', onformIgrejaSubmit)