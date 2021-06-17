import SHA256 from 'crypto-js/sha256'

export default class Bloco{
    constructor(timestamp, transacoes, hashBlocoAnterior){
        // this referenciando a classe Bloco, criando atributos
        this.timestamp = timestamp;
        this.transacoes = transacoes;  
        this.hashBlocoAnterior = hashBlocoAnterior; 
        this.contador = 0; 
        this.hash = this.CalcularHash(); 

    }
    CalcularHash(){ //função para calcular o hash 
        return SHA256(this.hashBlocoAnterior + this.timestamp + this.contador).toString();
    }
    minerarBloco(dificuldade){
        let pedacoDoHash = this.hash.substring(0, dificuldade);
        let hashASerMinerado = Array(dificuldade + 1).join("0"); 
        console.log(pedacoDoHash, hashASerMinerado); 
        
        while(pedacoDoHash !== hashASerMinerado){
            this.contador ++; 
            this.hash = this.CalcularHash(); 
            pedacoDoHash = this.hash.substring(0, dificuldade); 
            //console.log(pedacoDoHash, hashASerMinerado);
        }
        
        console.log('Bloco Minerado: ', this.hash)
    
    }
}