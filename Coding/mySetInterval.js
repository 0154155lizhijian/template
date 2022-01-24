// mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal


const time = {};
function mySetInterVal(fn, a, b) {
  let spend = a+b;
  let spendSum = 0;
  start = () => {
    time.id = setTimeout(() => {
      fn();
      start();
      console.log(spendSum += spend);
      spend += b;
    }, spend);
  };
  start();
}

mySetInterVal(
  () => {
    console.log("吴曼玉真美");
  },
  100,
  200
);

setTimeout(()=>myClear(time),2000);

function myClear(time) {
  clearTimeout(time.id);
  console.log('clear');
}
