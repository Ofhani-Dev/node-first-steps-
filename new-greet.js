const chalk = require("chalk");
const greet = require("./greet");
const figlet = require("figlet");

const styledMessage = chalk.bgGreen.black(greet("Ofhani"))
console.log(greet(styledMessage));

const message = greet("Ofhani");

figlet(message, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage)
});