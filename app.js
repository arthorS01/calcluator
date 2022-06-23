var  num1 = parseInt(prompt("Please enter first value:"));
var  num2 = parseInt(prompt("Please enter second value:"));
var operator = prompt("what operation would you like to perform ( /, * , + , - )?");
var answer = null;

console.log(num1,num2,operator);

switch(operator){
    case "*":
        answer = num1 * num2;
        break;
    case "+":
        answer = num1 + num2;
        console.log("plus was chosen",answer);
        break;
    case "/":
        answer = num1 / num2
        break;
    case "-":
        answer = num1 - num2;
        break;
    default:
        answer = null;

}

if(answer == null){

    alert("The operation you entered is invalid( "+ operator+" )");
}else{
    alert(num1+" "+ operator+" "+ num2 +" = "+answer)
}