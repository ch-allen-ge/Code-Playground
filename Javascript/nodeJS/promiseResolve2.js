var array = [1, 2, 3, 4, 5];

var sequence = Promise.resolve();

var addFive = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      resolve(num + 5);
    } else {
      reject('Arguement must be a number');
    }
  });
}

array.forEach((number) => {
  sequence = sequence.then(() => {
    return addFive(number).then((response) => {
      console.log(response);
    });
  })
})