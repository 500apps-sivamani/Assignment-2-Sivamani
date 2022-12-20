
function sumAll(start,end) {
  let sum=0;
    if(end>start){
        for(let i=start;i<=end;i++){
            sum=sum+i;
        }
    }
    else{
        for(let j=end;j<=start;j++){
            sum=sum+j;
        }
    }
    return sum;
}


function getOutput(){
	document.getElementById("output").innerText=sumAll(4,1);

}
