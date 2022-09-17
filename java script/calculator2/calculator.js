let firstnumber = +prompt("enter first number");
let secondnumber = +prompt("enter second number");
let choice =prompt("choose any one opetion +,-,*,/,%");

switch(choice){
    //if choice =++
    case "+":
         console.log("addition is :"+(firstnumber + secondnumber))
         break;
    case "-":
        console.log("subtraction is :"+(firstnumber - secondnumber))
        break;
    case "*":
        console.log("multiplication is :"+(firstnumber * secondnumber))
        break;
    case "/":
        console.log("division is :"+(firstnumber / secondnumber))
        break;
    case "%":
        console.log("module is :"+(firstnumber % secondnumber))
        break;
    default:
        console.log("this operation are notallowed here")
     
}