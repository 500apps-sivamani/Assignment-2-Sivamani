function sumPrimes(num) {

  let sum=0;
  

  for(let i=2;i<num+1;i++){
    let factors=0
    for(let j=2;j<i;j++){
        
        if(i%j===0){

        factors+=1
      }
      
    }

    if(factors===0){
        sum=sum+i
      }

  }
  return sum
}



function getOutput(){
	document.getElementById("output").innerText= sumPrimes(10);

}
