let clientes = []


function addCliente(){
    let nome = window.prompt("Insira seu nome: ")
    let endereco = window.prompt("Insira seu endereço: ")
    
    const cliente = new Cliente(nome,endereco)
    return cliente
}

function temCliente(){
    if(clientes.length > 0 ) return true
    return false
}

function mostrarClientes() {
    for(cliente of clientes){
        console.log("Nome: " + cliente.getNome());
        console.log("Endereço: " + cliente.getEndereco());
        console.log("-----------------------------------")
    }
}
function menu(){ 

    let i = true
    while(i == true){
        opcao = window.prompt("Escolha uma opção:\n1- Cadastrar cliente\n2- Mostrar clientes\n3- Cadastrar conta\n0- Sair")
        
        if(opcao == 1){
            clientes.push(addCliente())
        }
        else if(opcao == 2){
            if(temCliente()){
                mostrarClientes()
            }
            else {
                console.log("Não há clientes.")
            }}
        else if(opcao == 3){
            if(temCliente()){
                client = window.prompt("Escolha o cliente: ")
                if(client <= clientes.length){
                    let tipo = window.prompt("Escolha o tipo de conta:\n1- Corrente\n2- Poupança")
                    let conta

                    let numero = window.prompt("numero da conta: ")
                    let agencia = window.prompt("agencia da conta: ")
                    if(tipo == 1){
                        conta = new Corrente(numero, agencia)
                    }
                    else if(tipo == 2){
                        conta = new Poupanca(numero, agencia)
                    }}
                    clientes[client-1].addCliente(conta)
            }
        }
        else if(opcao == 0){
            i = false
        }
    }
}
menu()