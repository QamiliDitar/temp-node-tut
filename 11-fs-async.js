
const names = require("./4-names");
const {readFile, writeFile} = require("fs")
console.log("Start")

readFile("./content/first.txt","utf8", (err,result) => {
   if(err){
    console.log(err)
    return
   }
   const first = result;
   readFile("./content/second.txt", "utf8", (err,result) => {
    if(err){
        console.log(err)
        return
       }
       const second = result;
       writeFile("./content/result-async.txt",`this is the result ${names.Ditar}`,(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log("done with this task")
       } )
   })
})

console.log("Staring a new task")