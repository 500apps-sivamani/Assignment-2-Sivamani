function addTogether(a,b) {
  if(typeof(a)=== 'number' && typeof(b) === 'number'){
      return a+b
  }
  else{
    
    return undefined
  }
}

function getOutput(){
	document.getElementById("output").innerText=addTogether(2,3);
}