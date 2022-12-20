function sumFibs(num) {
  let sum = 0;
  let previous= 0;
  let current= 1;

  for(let i=0;i<num;i++){

     let final = previous + current;
      previous=current;
      current=final;

      if(final %2 !==0){
        sum=sum+final
      }

  }
  
  return sum
}

function getOutput(){
	document.getElementById("output").innerText=(sumFibs(5));
}
