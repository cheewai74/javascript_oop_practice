console.log(process.pid);
console.log(process.versions.node);

// -- node globalProcess Sam Cheng --
console.log(process.argv);

// -- node globalProcess Moss Wong --
const [,,firstName, lastName]= process.argv;
console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);