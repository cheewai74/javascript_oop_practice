const id = Symbol();

const courseInfo ={
    title: "JavaScript",
    topics: ["strings","arrays", "objects"]
};

courseInfo[id] = 41284;
console.log(courseInfo);