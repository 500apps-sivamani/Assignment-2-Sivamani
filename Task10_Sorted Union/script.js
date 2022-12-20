function uniteUnique(arr,...rest) {
  let a=arr.concat(...rest)
  return Array.from(new Set(a))
}



function getOutput(){
	document.getElementById("output").innerText=(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

}
