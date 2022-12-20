function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}


function getOutput(){
	document.getElementById("output").innerText=(translatePigLatin("consonant"));
}