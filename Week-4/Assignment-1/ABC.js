//Part A
function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  const result = n1 + n2;
  setTimeout(callback, delayTime, result);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

//Part B
function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise((resolve) => {
    const result = n1 + n2;
    setTimeout(resolve, delayTime, result);
  });
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

//Part C
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const show = await delayedResultPromise(4, 5, 3000);
  console.log(show);
}
main(); // result will be shown in the console after <delayTime> seconds
