var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Arguements must be numbers');
      }
    }, 1500);
  });
}

asyncAdd(1,2).then((result) => {
  console.log('Result: ', result);
  return Promise.resolve(result);
}).then((secondResult) => {
  var total = secondResult + 99;
  console.log('New total: ', total);
}).catch((errorMessage) => {
  console.log(errorMessage);
});