const fs = require("fs");
const fnames = fs.readFileSync("../doc/fnames.txt", { encoding: "utf-8" }).split("\n")
const lnames = fs.readFileSync("../doc/lnames.txt", { encoding: "utf-8" }).split("\n")

let unnamedSum = 0;

for (const f of fnames) {
    if (f == "John") {
        unnamedSum++
        console.log(f)
    }  
}

console.log(`Amount of Unnames: ${unnamedSum}`)

// for (const l of lnames) {
//     console.log(l)
// }
