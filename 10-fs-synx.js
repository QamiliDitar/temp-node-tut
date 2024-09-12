const names = require("./4-names");
const {readFileSync, writeFileSync} = require("fs")
console.log("Start")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

writeFileSync("./content/result-sync.txt", `this is the result ${names.Ditar}`)

console.log("Done with the task")
console.log("Starting the new task")