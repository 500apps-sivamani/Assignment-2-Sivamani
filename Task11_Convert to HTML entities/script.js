function convertHTML(str) {
  const strSplit = str.split('');
  for (let i = 0; i < strSplit.length; i++) {
    switch(strSplit[i]) {
      case "&":
        strSplit[i] = "&amp;";
        break;
      case "<":
        strSplit[i] = "&lt;";
        break;           
      case ">":
        strSplit[i] = "&gt;";
        break;
      case "'":
        strSplit[i] = "&apos;"
        break;
      case '"':
        strSplit[i] = "&quot;"
        break;       
    }
  }

  return strSplit.join('');
}

function getOutput(){
	document.getElementById("output").innerText=(convertHTML("Hamburgers < Pizza < Tacos"));
}
