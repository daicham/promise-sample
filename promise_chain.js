var flag = process.argv[2];

var promise = new Promise(function(resolve, reject) {
  console.log("1: promise executing");

  setTimeout(function() {
    console.log("5: heavy process completed!!");

    if(flag) {
      resolve("success!");
    } else {
      reject("required one argument.");
    }

  }, 3000);

  console.log("2: promise executed");
});

console.log("3: promise started");

promise.then(
  function(result) {
    console.log("6: fulfilled: " + result)
    return new Promise(function(resolve, reject) {
      reject("rejected in fulfilled");
    });
  },
  function(error) {
    console.log("6: rejected: " + error)
    return new Promise(function(resolve, reject) {
      resolve("resolved in rejected");
    });
  }
).then(
  function(result) {
    console.log("7: fulfilled: " + result);
  },
  function(error) {
    console.log("7: rejected: " + error);
  }
);
console.log("4: end");
