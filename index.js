import Blockchain from './blockchain'
import Transacao from './transacao';

const gustaCoin = new Blockchain(); 
const enderecoMinerador = 'endereco-gustavo';

const transacaoUm = new Transacao('endereco-filipe', 'endereco-marcia', 5)

gustaCoin.adicionarTransacao(transacaoUm);

gustaCoin.minerarTransacoesPendentes();
gustaCoin.ObterRecompensaDoMinerador(enderecoMinerador)
console.log(gustaCoin.getChain());

