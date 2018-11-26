var equalsTen = (a, b) => {
	var total = a+b;
	return new Promise((resolve, reject) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			reject('Arguements must be numbers');
		} else if (total !== 10) {
			reject('Total does not equal 10');
		} else {
			resolve(`The total is ${total}. Success.`);
		}
	});
};

equalsTen(8, 2)
.then((sumTotal) => {
	console.log(sumTotal);
	return Promise.reject();
})
.catch((error) => {
	console.log('hahahah, just kidding');
})