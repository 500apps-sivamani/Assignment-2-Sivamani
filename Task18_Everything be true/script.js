function truthCheck(collection, pre) {
  let checkedArray = collection.map(obj => {
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  })

  return checkedArray.includes(false) ? false : true;
}


function getOutput(){
	document.getElementById("output").innerText=truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
}