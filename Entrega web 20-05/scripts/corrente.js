class Corrente extends Conta{
    constructor(numero, agencia){
        super(numero, agencia)
        this.tipo = "corrente"
        this.taxa = 0.07
    }

    getTipo(){
        return this.tipo
    }   

    calculoTaxa(){
        return this.saldo - (this.taxa*this.saldo)
    }
    
}