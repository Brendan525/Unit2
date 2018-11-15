var eventType = prompt("What EventType is this?");

var tempFahr = prompt("What is the temperature?");

var results;


if(eventType === "casual" && tempFahr < 54){
results = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should ware something comfy and a coat`;
console.log (results);
}

  