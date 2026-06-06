const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Random number is ", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "data is not available" });
  }
});

getData
  .then((data) => console.log("promise resolved", data))
  .catch((err) => console.log(err));

const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Random number is ", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "data is not available" });
  }
});

const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Random number is ", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "data is not available" });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Random number is ", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "data is not available" });
  }
});

Promise.all([getData1, getData2, getData3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));


async function tryCatch () {
    try{
await console.log('hello')
}catch(err){
    console.log(err)
}
}

tryCatch()