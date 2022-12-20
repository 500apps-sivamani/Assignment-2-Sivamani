function dropElements(arr, func) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (!func(arr[0])) {
      arr.shift();
    }
    else {
      return arr;
    }
  }
  return arr;
}

function getOutput(){
	document.getElementById("output").innerText=dropElements([1, 2, 3], function(n) {return n < 3; });
}

