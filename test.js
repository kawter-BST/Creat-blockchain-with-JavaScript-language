const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
//bitcoin.createNewBlock();
const previousBlockHash = '998D6F94DD78A7679698DF84DEA6E8AAE18B109E78C8303A31195148302B5AE4';
const currentBlockData = [
    {
      amount : 10,
      sender : 'KAWTER-BOUDGHENE-STAMBOULI',
      recipient : 'CHAIMA-BOUDJEMAA',
    },
    {
       amount : 30,
        sender : 'NADJET-BOUCHENAFA',
        recipient : 'RIHAM-BOUDGHENE-STAMBOULI',
    },
];
const nonce = 100;

//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 61989));
//bitcoin.createNewBlock(1998,'KAWTER','BO14UD05GH19en98');




//bitcoin.createNewTransaction(200,'NADJET','RIHAM');
//bitcoin.createNewTransaction(800,'AMINA','KAWTER');
//bitcoin.createNewBlock(1997,'CHAIMA','BU01UD09JE19MA97');

//console.log(bitcoin.chain[1]);


//console.log(bitcoin.chain[2]);
//console.log(bitcoin);
