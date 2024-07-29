const myfs=require("fs");
const mybuf_data=myfs.readFileSync("myData.txt");
console.log(mybuf_data);