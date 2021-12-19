const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fnames = fs.readFileSync("../doc/fnames.txt", { encoding: "utf-8" }).split("\n")
const lnames = fs.readFileSync("../doc/lnames.txt", { encoding: "utf-8" }).split("\n")



let person = {
    fname: "",
}

console.log("Who are you looking for?")
rl.question("First Name: ", (fnameinput) => {

});

rl.on("close", function() {
    process.exit(0);
});