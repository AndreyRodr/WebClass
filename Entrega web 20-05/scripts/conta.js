class Conta{
    constructor(numero, agencia){
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = 0;
    }

    getNumero(){
        return this.numero
    }

    setNumero(numero){
        this.numero = numero
    }
    getAgencia(){
        return this.agencia
    }

    setAgencia(agencia){
        this.agencia = agencia
    }

    mudarSaldo(saldo){
        this.saldo += saldo
    }

    getSaldo(){
        return this.saldo
    }

    calculoTaxa(){
        
    }

}