alert("Text");
//function .> normal/regular->
function hello(){
console.log("this is hello world " + "hello friends")
}

hello();
//------------------------------------------------------
//function with parameter.>>>
//function functionname(param1,param2,..paramN){
//}
//function call(to use/run the function)
function sum(num1,num2,num3){
    console.log("addition of 3 number is:"+(num1 + num2 + num3))
} 
sum(5,7,9);

function sub(num1,num2){
    console.log("subtraction of two number is:"+(num1 - num2))
}
sub(4623,767);

function multi(num1,num2){
    console.log("multipication of two numbers is:"+(num1 * num2))
}
multi(4512,647);
//---------------------------------------------------------
 //default parameters
 function sum(num1=0,num2,num3=0){
    console.log("addition of 3 number is:"+(num1 + num2 + num3))
} 
sum(5,7);
function sub(num1=0,num2=0, num3=0){
    console.log("subtraction of two number is:"+(num1 - num2 - num3))
}
sub(70,50);

function multi(num1,num2,num3=true){
    console.log("multipication of two number is:"+(num1 * num2 * num3))
}
multi(2,2, true);
//-----------------------------------------------------------
//function returning some vale to function call/function with return some value..
function sum(num1=0,num2,num3=0){
    console.log("addition of 3 number is:"+(num1 + num2 + num3))

    let r= num1 + num2 + num3;
    return r;
}
let result =sum(45,77);
console.log(result); 

function sub(num1=0,num2,num3=0){
    console.log("subtraction of 3 number is:"+(num1 + num2 + num3))

    let r= num1 + num2 + num3;
    return r;
}
let result =sub(122,50); 
console.log(result); 




