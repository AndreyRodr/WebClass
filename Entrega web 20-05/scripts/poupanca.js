class Poupanca extends Conta{
    constructor(numero, agencia){
        super(numero, agencia)
        this.tipo = "poupança";
        taxa = 5;
    }
    getTipo(){
        return this.tipo
    }   

    calculoTaxa(){
        return this.saldo - this.taxa
    }
}