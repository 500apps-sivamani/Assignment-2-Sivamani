function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map(obj => {
    let oP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    delete obj.avgAlt;
    obj.orbitalPeriod = oP;
  })
  return arr;
}

function getOutput(){
	document.getElementById("output").innerText=orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
}
