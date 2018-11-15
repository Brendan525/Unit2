var eventType = prompt("What EventType is this?");

var tempFahr = prompt("What is the temperature?");

var results;


if(eventType === "casual" && tempFahr < 54){
results = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear something comfy and a coat`;
console.log (results);
}

else if(eventType === "casual" && tempFahr >= 54 && eventType === "casual" && tempFahr <= 70){   
result = `Since it is ${tempFahr} degrees and you are going to a  ${eventType} event. You should wear something comfy and a jacket`;
console.log (results);
}

else if(eventType === "casual" && tempFahr > 70){
result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a something comfy and no jacket.`
console.log(result);
}

if(eventType === "semi-casual" && tempFahr < 54){
results = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a polo and a coat`;
console.log (results);
}

else if(eventType === "semi-casual" && tempFahr >= 54 && eventType === "semi-casual" && tempFahr <= 70){   
result = `Since it is ${tempFahr} degrees and you are going to a  ${eventType} event. You should wear a polo and a jacket`;
console.log (results);
}

else if(eventType === "semi-casual" && tempFahr > 70){
 result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a polo and no jacket.`
console.log(result);
}
if(eventType === "formal" && tempFahr < 54){
results = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a suit and a coat`;
console.log (results);
}

else if (eventType === "formal" && tempFahr >= 54 && eventType === "formal" && tempFahr <= 70){   
result = `Since it is ${tempFahr} degrees and you are going to a  ${eventType} event. You should wear a suit and a jacket`;
console.log (results);
}

else if (eventType === "formal" && tempFahr > 70){
result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a suit and no jacket.`
console.log(result);
}
