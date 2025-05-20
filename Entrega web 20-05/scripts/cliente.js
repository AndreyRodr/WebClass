class Cliente {
    constructor(nome, endereco, conta){
        this.nome = nome
        this.endereco = endereco
        this.conta = []
    }

    setNome(nome){
        this.nome = nome
    }

    getNome(){
        return this.nome
    }

    setEndereco(endereco){
        this.endereco = endereco
    }

    getEndereco(){
        return this.endereco
    }


    getConta(){
        return this.conta
    }

    addConta(conta){
        this.conta.push(conta)
    }
}