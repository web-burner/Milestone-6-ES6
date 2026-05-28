function counter() {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
  };
}

const shaon = counter();
// console.log(shaon)
shaon();
shaon();
shaon();
shaon();
console.log("----------------");
const sajjat = counter();
sajjat();
sajjat();
sajjat();
sajjat();
