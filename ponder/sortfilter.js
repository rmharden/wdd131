nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn));


function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}
                