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

class Membro {


    constructor(nome, endereco, dataNascimento, telefone, whatsapp, email, sexo, estadoCivil, batizado, dataBatismo, cargo) {
        this.nome = nome
        this.endereco = endereco
        this.dataNascimento = dataNascimento
        this.telefone = telefone
        this.whatsapp = whatsapp
        this.email = email
        this.sexo = sexo
        this.estadoCivil = estadoCivil
        this.batizado = batizado
        this.dataBatismo = dataBatismo
        this.cargo = cargo
        this.id = criarId()
    }




}



const templo = new Igreja('Igreja Ceifa em Sumidouro', 'Rua 10 de Junho', '(99) 9999-99999')


const onformIgrejaSubmit = (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const endereco = document.getElementById('endereco').value
    const dataNascimento = document.getElementById('dataNascimento').value
    const telefone = document.getElementById('telefone').value
    const whatsapp = document.getElementById('select-whatsapp').value
    const email = document.getElementById('email').value
    const sexo = document.getElementById('select-sexo').value
    const estadoCivil = document.getElementById('select-estado-civil').value
    const batizado = document.getElementById('select-batizado').value
    const dataBatizado = document.getElementById('diaBatismo').value
    const cargo = document.getElementById('select-cargo').value
    
  
    if (!nome.trim() || !endereco.trim() || !telefone.trim() || !email) return
   
    const pessoas = new Membro(nome, endereco, dataNascimento, telefone, whatsapp, email, sexo, estadoCivil, batizado, dataBatizado, cargo)
    membros.push(pessoas)

    

    renderizarTabelaMembros()
    document.getElementById('form-igreja').reset()
}


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


let dataPadraoBR = (data) => {
    const dataNascimento = document.getElementById('dataNascimento').value
    const dataInput = dataNascimento
    data = new Date(dataInput)
    return dataPadraoBrasil = data.toLocaleDateString('pt-BR', {
        timeZone: 'UTC'
    })
}

let dataPadraoBRBatismo = (data) => {
    const dataBatizado = document.getElementById('diaBatismo').value
    const dataInputBatismo = dataBatizado
    data = new Date(dataInputBatismo)
    return dataPadraoBrasilBatismo = data.toLocaleDateString('pt-BR', {
        timeZone: 'UTC'
    })

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

const deletarPessoa = (id) => {
    for (let i = 0; i < membros.length; i++) {
        if (membros[i].id === id) {
            const dialog = confirm("Deseja realmente EXCLUIR esse membro?")
            if (dialog) {
                membros.splice(i, 1)
                renderizarTabelaMembros()
                document.getElementById('form-igreja').reset()
            }
        }

    }
}

    const renderizarTabelaMembros = () => {
        const tabelaInterface = document.getElementById('tabela-membros')
        tabelaInterface.innerHTML = ''

        const trHeader = document.createElement('tr')
        const tdIdHeader = document.createElement('th')
        const tdNomeHeader = document.createElement('th')
        const tdEnderecoHeader = document.createElement('th')
        const tdDataNascimentoHeader = document.createElement('th')
        const tdTelefoneHeader = document.createElement('th')
        const tdWhatsappHeader = document.createElement('th')
        const tdEmailHeader = document.createElement('th')
        const tdSexoHeader = document.createElement('th')
        const tdEstadoCivilHeader = document.createElement('th')
        const tdBatizadoHeader = document.createElement('th')
        const tdDataBatizadoHeader = document.createElement('th')
        const tdCargoHeader = document.createElement('th')
        const tdDeleteHeader = document.createElement('th')
        

        tdIdHeader.innerHTML = 'ID'
        tdNomeHeader.innerHTML = 'Nome'
        tdEnderecoHeader.innerHTML = 'Endereço'
        tdDataNascimentoHeader.innerHTML = 'Data de Nascimento'
        tdTelefoneHeader.innerHTML = 'Telefone'
        tdWhatsappHeader.innerHTML = 'WhatsApp'
        tdEmailHeader.innerHTML = 'Email'
        tdSexoHeader.innerHTML = 'Sexo'
        tdEstadoCivilHeader.innerHTML = 'Estado Civil'
        tdBatizadoHeader.innerHTML = 'Batizado'
        tdDataBatizadoHeader.innerHTML = 'Data Batizado'
        tdCargoHeader.innerHTML = 'Cargo'
        tdDeleteHeader.innerHTML = 'Excluir'


        trHeader.appendChild(tdIdHeader)
        trHeader.appendChild(tdNomeHeader)
        trHeader.appendChild(tdEnderecoHeader)
        trHeader.appendChild(tdDataNascimentoHeader)
        trHeader.appendChild(tdTelefoneHeader)
        trHeader.appendChild(tdWhatsappHeader)
        trHeader.appendChild(tdEmailHeader)
        trHeader.appendChild(tdSexoHeader)
        trHeader.appendChild(tdEstadoCivilHeader)
        trHeader.appendChild(tdBatizadoHeader)
        trHeader.appendChild(tdDataBatizadoHeader)
        trHeader.appendChild(tdCargoHeader)
        trHeader.appendChild(tdDeleteHeader)

        tabelaInterface.appendChild(trHeader)
        
        membros.forEach(pessoa => {
            const tr = document.createElement('tr')
            const tdId = document.createElement('td')
            const tdNome = document.createElement('td')
            const tdEndereco = document.createElement('td')
            const tdDataNascimento = document.createElement('td')
            const tdTelefone = document.createElement('td')
            const tdWhatsapp = document.createElement('td')
            const tdEmail = document.createElement('td')
            const tdSexo = document.createElement('td')
            const tdEstadoCivil = document.createElement('td')
            const tdBatizado = document.createElement('td')
            const tdDataBatizado = document.createElement('td')
            const tdCargo = document.createElement('td')
            const tdDelete = document.createElement('button')

            tdDelete.setAttribute("onclick", "deletarPessoa("+ pessoa.id +")")

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdEndereco)
            tr.appendChild(tdDataNascimento)
            tr.appendChild(tdTelefone)
            tr.appendChild(tdWhatsapp)
            tr.appendChild(tdEmail)
            tr.appendChild(tdSexo)
            tr.appendChild(tdEstadoCivil)
            tr.appendChild(tdBatizado)
            tr.appendChild(tdDataBatizado)
            tr.appendChild(tdCargo)
            tr.append(tdDelete)
            
            tabelaInterface.appendChild(tr)

            tdId.innerHTML = pessoa.id
            tdNome.innerHTML = letrasMaiusculas(pessoa.nome)
            tdEndereco.innerHTML = pessoa.endereco
            tdDataNascimento.innerHTML = dataPadraoBR(pessoa.dataNascimento)
            tdTelefone.innerHTML = mascaraTel(pessoa.telefone)
            tdWhatsapp.innerHTML = pessoa.whatsapp
            tdEmail.innerHTML = pessoa.email
            tdSexo.innerHTML = pessoa.sexo
            tdEstadoCivil.innerHTML = pessoa.estadoCivil
            tdBatizado.innerHTML = pessoa.batizado
            tdDataBatizado.innerHTML = dataPadraoBRBatismo(pessoa.dataBatismo)
            tdCargo.innerHTML = pessoa.cargo
            tdDelete.innerHTML = 'Delete'
        })
        
    }

    

document.getElementById('form-igreja').reset()



document.getElementById('btn-enviar').addEventListener('click', onformIgrejaSubmit)