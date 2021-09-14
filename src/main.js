









let firstName = "Kim"
console.log(firstName)





function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}



console.log(myFunction(2,4))

let x = myFunction(4, 3);   // Function is called, return value will end up in x
console.log(x)
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}



function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);


console.log(toCelsius(22))







// function counter() {
//   let seconds = 0;
//   setInterval(() => {
//     seconds += 1;
//     document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
//   }, 1000);
// }

// counter();