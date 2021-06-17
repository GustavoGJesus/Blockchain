import Bloco from "./bloco";

export default class Blockchain{
    constructor() {
        this.chain = [];
        this.chain.push(this.criarBlocoGenesis());
        this.transacoesPendentes = []; 
        this.dificuldade = 2;// proof of work 
        this.recompensaMinerador = 0.5; 
    }

    criarBlocoGenesis(){
        return new Bloco('21/04/2021', 'Bloco Genesis', '0');
    }
    
    adicionarTransacao(transacao){
        this.transacoesPendentes.push(transacao);
    }
    
    getChain(){
        return this.chain; 
    }

    getHashUltimoBloco(){
        return this.chain[this.chain.length - 1].hash;


    }
    minerarTransacoesPendentes(){
        console.log('Iniciando mineração')
        const novoBloco = new Bloco(Date.now(), this.transacoesPendentes, this.getHashUltimoBloco());
        this.transacoesPendentes, this.getHashUltimoBloco();
        novoBloco.minerarBloco(this.dificuldade)
        console.log('Bloco Minerado com sucesso!'); 
        this.chain.push(novoBloco);
    }
    
    ObterRecompensaDoMinerador(enderecoMinerador){
       let valorRecompensa = 0; 

       for (const bloco  of this.chain){
            for(const transacao of bloco.transacoes){
                if (transacao.enderecoRemetente === enderecoMinerador){
                    valorRecompensa -=  transacao.valor; 
                }
                if (transacao.enderecoDestinatario === enderecoMinerador){
                    valorRecompensa
                }

            }
       }

    }

}