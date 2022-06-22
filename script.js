//Basic Arithmetic Calculator

//Collect the operator type
const operator = prompt('Input your desired operation (+ , - , * , /):');

//Collect the value
const value1 = parseFloat(prompt ('Input first value: '));

const value2 = parseFloat(prompt(`Input first value:

${value1} ${operator}`) );

let result;

// Determining which operation will be performed 

if(operator == '+'){
    result = value1 + value2;
}
else if(operator == '-'){
    result = value1 - value2;
}
else if(operator == '*'){
    result = value1 * value2;
}
else if(operator == '/'){
    result = value1 / value2;
}
alert(`${value1}  ${operator}  ${value2} = ${result}`)