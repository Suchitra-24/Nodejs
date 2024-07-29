const fs=require("fs");
const { json } = require("node:stream/consumers");
const bioData={
    name:"suchitra",
    age:20,
    skill:"NodeJS Programmer"
}
console.log(bioData);
const jsonData = JSON.stringify(bioData);
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("Process Completed.....")
})
fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);
})