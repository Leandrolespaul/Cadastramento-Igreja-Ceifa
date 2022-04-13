let membros = []

let proximoId = 1
const criarId = () => proximoId++

class Igreja {


    constructor(nome, logradouro, telefoneCel) {
        this.nome = nome
        this.logradouro = logradouro
        this.telefoneCel = telefoneCel

    }
}

class Dados {


    constructor(nome, dataNascimento, telefone, email, sexo, estadoCivil, batizado, cargo) {
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.telefone = telefone
        this.email = email
        this.sexo = sexo
        this.estadoCivil = estadoCivil
        this.batizado = batizado
        this.cargo = cargo
        this.id = criarId()
    }
    
    


}



const templo = new Igreja('Igreja Ceifa em Sumidouro', 'Rua 10 de Junho', '(99) 9999-99999')


const onformIgrejaSubmit = (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const dataNascimento = document.getElementById('dataNascimento').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const sexo = document.getElementById('select-sexo').value
    const estadoCivil = document.getElementById('select-estado-civil').value
    const batizado = document.getElementById('select-batizado').value
    const cargo = document.getElementById('select-cargo').value

    const pessoas = new Dados(nome, dataNascimento, telefone, email, sexo, estadoCivil, batizado, cargo)
    membros.push(pessoas)

    const primeiraLetraMaiuscula = (pessoa) => {
        return pessoa.charAt(0).toUpperCase() + pessoa.slice(1);
    }

    const letrasMaiusculas = (nome) => {
        
            let palavras = nome.toLowerCase().split(" ");
            for (let a = 0; a < palavras.length; a++) {
                const letra = palavras[a];
                palavras[a] = letra[0].toUpperCase() + letra.slice(1);
            }
            return palavras.join(" ");
        
    }

    const dataPadraoBR = (data) => {
        let dataInput = dataNascimento

        data = new Date(dataInput);
        return dataPadraoBrasil = data.toLocaleDateString('pt-BR', {
            timeZone: 'UTC'
        });
    }

    const mascaraTel = (telefone) => {
        let alterarFormatoTel = telefone.replace(/\D/g, "");
        alterarFormatoTel = alterarFormatoTel.replace(/^0/, "");
      
        if (alterarFormatoTel.length > 11) {
            alterarFormatoTel = alterarFormatoTel.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (alterarFormatoTel.length > 7) {
            alterarFormatoTel = alterarFormatoTel.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
        } else if (alterarFormatoTel.length > 2) {
            alterarFormatoTel = alterarFormatoTelr.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else if (telefone.trim() !== "") {
            alterarFormatoTel = alterarFormatoTel.replace(/^(\d*)/, "($1");
        }
        return alterarFormatoTel;
        
    }

    

    




    const tabelaInterface = document.getElementById('tabela-membros')
    tabelaInterface.innerHTML = ''

    const trHeader = document.createElement('tr')
    const tdIdHeader = document.createElement('th')
    const tdNomeHeader = document.createElement('th')
    const tdDataNascimentoHeader = document.createElement('th')
    const tdTelefoneHeader = document.createElement('th')
    const tdEmailHeader = document.createElement('th')
    const tdSexoHeader = document.createElement('th')
    const tdEstadoCivilHeader = document.createElement('th')
    const tdBatizadoHeader = document.createElement('th')
    const tdCargoHeader = document.createElement('th')

    tdIdHeader.innerHTML = 'ID'
    tdNomeHeader.innerHTML = 'Nome'
    tdDataNascimentoHeader.innerHTML = 'Data de Nascimento'
    tdTelefoneHeader.innerHTML = 'Telefone'
    tdEmailHeader.innerHTML = 'Email'
    tdSexoHeader.innerHTML = 'Sexo'
    tdEstadoCivilHeader.innerHTML = 'Estado Civil'
    tdBatizadoHeader.innerHTML = 'Batizado'
    tdCargoHeader.innerHTML = 'Cargo'

    trHeader.appendChild(tdIdHeader)
    trHeader.appendChild(tdNomeHeader)
    trHeader.appendChild(tdDataNascimentoHeader)
    trHeader.appendChild(tdTelefoneHeader)
    trHeader.appendChild(tdEmailHeader)
    trHeader.appendChild(tdSexoHeader)
    trHeader.appendChild(tdEstadoCivilHeader)
    trHeader.appendChild(tdBatizadoHeader)
    trHeader.appendChild(tdCargoHeader)

    tabelaInterface.appendChild(trHeader)

    membros.forEach(pessoa => {
        const tr = document.createElement('tr')
        const tdId = document.createElement('td')
        const tdNome = document.createElement('td')
        const tdDataNascimento = document.createElement('td')
        const tdTelefone = document.createElement('td')
        const tdEmail = document.createElement('td')
        const tdSexo = document.createElement('td')
        const tdEstadoCivil = document.createElement('td')
        const tdBatizado = document.createElement('td')
        const tdCargo = document.createElement('td')

        tr.appendChild(tdId)
        tr.appendChild(tdNome)
        tr.appendChild(tdDataNascimento)
        tr.appendChild(tdTelefone)
        tr.appendChild(tdEmail)
        tr.appendChild(tdSexo)
        tr.appendChild(tdEstadoCivil)
        tr.appendChild(tdBatizado)
        tr.appendChild(tdCargo)

        tabelaInterface.appendChild(tr)

        tdId.innerHTML = pessoa.id
        tdNome.innerHTML = letrasMaiusculas(pessoa.nome)
        tdDataNascimento.innerHTML = dataPadraoBR(pessoa.dataNascimento) 
        tdTelefone.innerHTML = mascaraTel(pessoa.telefone)
        tdEmail.innerHTML = pessoa.email
        tdSexo.innerHTML = pessoa.sexo
        tdEstadoCivil.innerHTML = pessoa.estadoCivil
        tdBatizado.innerHTML = pessoa.batizado
        tdCargo.innerHTML = pessoa.cargo
    })

}


document.getElementById('form-igreja').reset()
document.getElementById('btn-enviar').addEventListener('click', onformIgrejaSubmit)