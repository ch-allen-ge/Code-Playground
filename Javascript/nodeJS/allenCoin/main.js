const SHA256 = require('crypto-js/sha256');

class Transaction {
	constructor(fromAddress, toAddress, amount) {
		this.fromAddress = fromAddress;
		this.toAddress = toAddress;
		this.amount = amount;
	}
}


class Block {
	constructor(timestamp, transactions, previousHash = '') {
		this.timestamp = timestamp;
		this.transactions = transactions;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	calculateHash() {
		return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
	}

	mineBlock(difficulty) {
		while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join('0')) {
			this.nonce++;
			this.hash = this.calculateHash();
		}

		console.log(`Block mined: ${this.hash}`);
	}
}

class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 2;
		this.pendingTransactions = [];
		this.miningReward = 100;
	}

	createGenesisBlock() {
		return new Block('12/16/2018', 'Genesis block', '0');
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	// addBlock(newBlock) {
	// 	newBlock.previousHash = this.getLatestBlock().hash;
	// 	//newBlock.hash = newBlock.calculateHash();
	// 	newBlock.mineBlock(this.difficulty);
	// 	this.chain.push(newBlock);
	// }

	minePendingTransactions(miningRewardAddress) {
		this.pendingTransactions.push(new Transaction(null, miningRewardAddress, this.miningReward));
		let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
		block.mineBlock(this.difficulty);

		console.log('Block successfully mined!');
		this.chain.push(block);

		 this.pendingTransactions = [
		// 	new Transaction(null, miningRewardAddress, this.miningReward)
		 ];
	}

	createTransaction(transaction) {
		this.pendingTransactions.push(transaction);
	}

	getBalanceOfAddress(address) {
		let balance = 0;

		for(const block of this.chain) {
			for (const transaction of block.transactions) {
				if (transaction.fromAddress === address) {
					balance -= transaction.amount;
				} else if (transaction.toAddress === address) {
					balance += transaction.amount;
				}
			}
		}

		return balance;
	}

	isChainValid() {
		for(let i=1; i<this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i-1];

			if (currentBlock.hash != currentBlock.calculateHash()) {
				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}

		return true;
	}
}

let allenCoin = new Blockchain();
allenCoin.createTransaction(new Transaction('address1', 'address2', 100));
allenCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner');
allenCoin.minePendingTransactions('myWalletAddress');

console.log('\n Balance of my wallet is', allenCoin.getBalanceOfAddress('myWalletAddress'));

console.log('\n Starting the miner again...');
allenCoin.minePendingTransactions('myWalletAddress');

console.log('\n Balance of my wallet is', allenCoin.getBalanceOfAddress('myWalletAddress'));
// console.log('Mining block 1...');
// allenCoin.addBlock(new Block(1, '1/1/18', {amount: 5}));

// console.log('Mining block 2...');
// allenCoin.addBlock(new Block(2, '1/2/18', {amount: 15}));

// console.log(JSON.stringify(allenCoin, null, 4));

// console.log('Is blockchain valid?' + allenCoin.isChainValid());

// allenCoin.chain[1].data = {amount: 100};
// allenCoin.chain[1].hash = allenCoin.chain[1].calculateHash();

// console.log('Is blockchain valid?' + allenCoin.isChainValid());