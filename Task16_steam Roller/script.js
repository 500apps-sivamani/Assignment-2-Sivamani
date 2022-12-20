function steamrollArray(arr) {
  return arr.flat(3)
}

function getOutput(){
	document.getElementById("output").innerText=(steamrollArray([1, [2], [3, [[4]]]]));
}
