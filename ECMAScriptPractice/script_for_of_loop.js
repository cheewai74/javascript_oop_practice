for (let letter of "JavaScript"){
    console.log(letter);
}

let topics = new Map();
topics.set("HTML","/topic/html");
topics.set("CSS","/topic/css");
topics.set("JavaScript","topic/javascript");

for (let topic of topics){
    console.log(topic);
}

for (let topic of topics.keys()){
    console.log(topic);
}

for (let route of topics.values()){
    console.log(`The course description can be found at ${route}`);
}

for (let topic of topics.entries()){
    console.log(topic);
}