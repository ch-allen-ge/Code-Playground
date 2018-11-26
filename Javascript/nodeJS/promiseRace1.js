const promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'foo');
}); 
const promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'bar');
}); 
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 900, 'baz');
}); 

Promise.race([promise1, promise2, promise3]).then((response) => { 
  console.log(response);
  // bar
});