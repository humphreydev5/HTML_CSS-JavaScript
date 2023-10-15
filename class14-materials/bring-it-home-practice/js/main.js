// // *Variables*
// // Create a variable and console log the value
// const yum = "sweet and delicious meal";
// console.log(yum);

// // Create a variable, add 10 to it, and alert the value
// const num = 12;
// alert(num + 10);


// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
// function subNumber(num1, num2, num3, num4){
//   alert(num1 - num2 - num3 - num4);
// }
// subNumber(23, 32, 12, 14);


// // Create a function that divides one number by another and returns the remainder
// function modNumber(num1, num2){
//   console.log(num1 % num2)
// }
// modNumber(34, 9)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function addsNumb(num1, num2){
//   const resNumber = num1 + num2;
//   if (resNumber >= 50){
//     alert("jumanji");
//   }else{
//     alert("less than")
//   }
// }
// addsNumb(23, 65)
// //addsNumb(34, 12)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiNumber(numb1, numb2, numb3){
  const sumTotal = numb1 * numb2 * numb3;
  if (sumTotal % 3 === 0){
    alert("Zebra");
  }else{
    alert("Not Divisible by 3")
  }
}
multiNumber(3, 3, 3)

