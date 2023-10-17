// *Variables*
// Create a variable and console log the value
let boy = "Micheal";
console.log(boy);

// Create a variable, add 10 to it, and alert the value
let numb = 12;
numb = numb + 10;
alert(numb);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subNum(num1,  num2, num3, num4){
  alert(num1-num2-num3-num4)
}
subNum(12, 23, 4, 6)
// Create a function that divides one number by another and returns the remainder
function modNumb(num1, num2){
  return (num1 % num2)
}
modNumb(12, 34);


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNumber(num1, num2){
  const sumTotal = num1 + num2;
  if(sumTotal > 50){
    alert("Jumanji")
  }
}
addNumber(23, 45);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiNumber(num1, num2, num3){
  const sumTotal = num1 * num2 * num3
  if(sumTotal % 3 === 0){
    alert("Zebra")
  }
}
multiNumber(23, 4, 3);


// //*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}
logWordXTimes("Hello", 3); // Logs "Hello" three times

