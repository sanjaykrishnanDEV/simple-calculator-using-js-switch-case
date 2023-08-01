let num1 = Number(prompt('enter a num: '));
let num2 = Number(prompt('enter a num: '));
let operator = prompt('enter an operation: ');

switch(operator){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
         console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
     console.log('bimbilikka bilaapi');
}
