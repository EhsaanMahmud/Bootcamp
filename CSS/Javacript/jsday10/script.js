let subject="Java \\\" Script";
let subject2='javaScript';
let subject3=`JavaScript ${subject2} Continue string`;
const date=new Date();
console.log('Today date is', date.getDate(), ' Rest of the String');

console.log(subject2.slice(-5,-1));


let numbers=[2,4,7,32,7,9,8,10,4]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
  }