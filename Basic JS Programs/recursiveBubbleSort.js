

function recursiveBubbleSort(data, count) {
  if (count == 1) {
    return;
  }
  let currentEl = 0;
  
  for (let i = 0; i < count - 1; i++) {
    if (data[i] > data[i + 1]) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
      currentEl++;
    }
  }
  recursiveBubbleSort(data,count-1)
}
let arr = [64, 34, 25, 12];
recursiveBubbleSort(arr, arr.length)
console.warn(arr)