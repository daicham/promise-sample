var flag = process.argv[2];

var promise1 = new Promise(function(resolve, reject) {
  console.log("1-1: promise executing");

  setTimeout(function() {
    console.log("5-1: heavy process completed!!");

    if(flag) {
      resolve("success!");
    } else {
      reject("required one argument.");
    }

  }, 3000);

  console.log("2-1: promise executed");
});

var promise2 = new Promise(function(resolve, reject) {
  console.log("1-2: promise executing");

  setTimeout(function() {
    console.log("5-2: heavy process completed!!");

    if(flag) {
      resolve("success!");
    } else {
      reject("required one argument.");
    }

  }, 5000);

  console.log("2-2: promise executed");
});

console.log("3: promise started");

var promises = [promise1, promise2];

Promise.all(promises).then(
    function(result) {
      console.log("6: fulfilled: " + result)
    },
    function(error) {
      console.log("6: rejected: " + error)
    }
);

console.log("4: end");
