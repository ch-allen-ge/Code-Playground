var isTrue = (bool) => {
	return new Promise((resolve, reject) => {
		if (bool === true) {
			resolve('pass');
		} else {
			reject('fail');
		}
	});
};

var equalsFifteen = (a, b, c) => {
	return new Promise((resolve, reject) => {
		if ((a+b+c) === 15) {
			resolve('pass');
		} else {
			reject('fail');
		}
	});
}

var rejected = () => {
	return Promise.reject('fail');
}

var accepted = () => {
	return Promise.resolve('pass');
}

var promiseArray = [];

for (var i=0; i<2; i++) {
	promiseArray.push(isTrue(true));
	//promiseArray.push(isTrue(false));
	promiseArray.push(equalsFifteen(5,5,5));
	//promiseArray.push(equalsFifteen(1,1,1));
	//promiseArray.push(rejected());
	promiseArray.push(accepted());
}

Promise.all(promiseArray)
.then((arrayOfResponses) => {
	console.log(arrayOfResponses);
})
.catch((error) => {
	console.log('something was rejected');
})

//will fail if any of the Promises fail