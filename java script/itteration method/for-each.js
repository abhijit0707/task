const names = ["abhi","dipak","kiran","sachin"]

console.log("for loop");
for(let i=0; i<names.length;i++){
    console.log(`${i},name is : ${names[i]}`);
}
//using for each
console.log("for each");
const printname =function(name,index){
    console.log(`${index}. name:${name}`);
}
names.forEach(printname);
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//or

console.log("or");
names.forEach(function(name,index){
    console.log(`${index}. name is : ${name}`);
});
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//or
//console.log("or");
//names.forEach(function(name,index) =>
//(console.log(`${index}.name is : ${names}`)));

