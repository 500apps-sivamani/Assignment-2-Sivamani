function myReplace(str, before, after) {
      return str.replace(before,after)
}

function getOutput(){
	document.getElementById("output").innerText=(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
}