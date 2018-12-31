const {Blockchain, Transaction} = require('./blockchain.js');
const ellipticCurve = require('elliptic').ec;

const ec = new ellipticCurve('secp256k1');

const myKey = ec.keyFromPrivate('caf891b0f48658f0af66520c3d7bdaa16b21702ffc9137312f0489a0140bf13c');
const myWalletAddress = myKey.getPublic('hex');

let allenCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'publicKeyGoesHere', 10);
tx1.signTransaction(myKey);
allenCoin.addTransaction(tx1);

console.log('\n Starting the miner');
allenCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of my wallet is', allenCoin.getBalanceOfAddress(myWalletAddress));
