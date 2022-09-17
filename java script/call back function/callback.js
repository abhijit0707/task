function add(n1, n2){
    console.log("addition " + (n1 + n2));
}
function sub(n1, n2){
console.log("substraction " + (n1 - n2));
}
function mult(n1, n2){
    console.log("multiplication " + n1 * n2);
}
function div(n1, n2){
    console.log("division " + n1 / n2);
}
function mod(n1, n2){
    console.log("modules " + n1 % n2);
}
function calc(number1, number2,name,func){
console.log("Hello " + name);
func(number1,number2);//callback
console.log("Thank you for using calc!");
}
calc(15, 20, "abhi" , add);
calc(30, 20, "dipak" ,sub);
calc(10,20, "kiran",mult);
calc(5, 20, "sachin", div);
calc(20, 20, "akash", mod);