// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });


// ---------- Exercise 1 ----------
function runExercise1() {
  const firstName: string = "Stefan";
  const lastName: string = "Karlsson";
  console.log(`Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`);
}


// ---------- Exercise 2 ----------
function runExercise2() {
  const firstName: string = readLine('First name: ');
  const lastName: string = readLine('Last name: ');
  console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}


// ---------- Exercise 3 ----------
function runExercise3() {
  // Exercise 3A
  const num1: number = 13;
  const num2: number = 8;
  const sum: number = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);

  // Exercise 3B
  const num3: number = 4;
  const num4: number = 7;
  const result = num4 / num3;
  console.log(`${num4} / ${num3} = ${result}`);
}


// ---------- Exercise 4 ----------
function runExercise4() {
  // Area of a circle = r*r*PI
  // Area of a sphere = 4*r*r*PI

  let radius: number;
  do {
    radius = Number(readLine('Enter the radius of a circle/sphere: '));
  } while (Number.isNaN(radius) || radius < 0);

  const circleArea: number = Math.PI * radius**2;
  const sphereArea: number = 4 * circleArea;

  console.log(`A radius of ${radius} will give a circle-area of ${circleArea.toFixed(2)} and a sphere-area of ${sphereArea.toFixed(2)}`);
}


// ---------- Exercise 5 ----------
function runExercise5() {
  console.log('Enter two consecutive numbers');
  
  let num1: number;
  let num2: number;

  do {
    num1 = Number(readLine('Number 1: '));
  } while (Number.isNaN(num1));

  do {
    num2 = Number(readLine('Number 2: '));
  } while (Number.isNaN(num2));


  if (num1 + 1 === num2 || num1 - 1 === num2 ) {
    console.log("Result: Consecutive");
  }
  else {
     console.log("Result: Not consecutive");
  }
}


// ---------- Exercise 6 ----------
function runExercise6() {

  let number: number;

  do {
    number = Number(readLine('Enter a positive integer: '));
  } while (!Number.isInteger(number) || number <= 0);

  if (number % 2 === 0) console.log(`${number} is even`);
  else console.log(`${number} is odd`);

}


// ---------- Exercise 7 ----------
function runExercise7() {

  let temp;

  do {
    temp = Number(readLine('Enter your body temperature (°C): '));
  } while (Number.isNaN(temp));

  if (temp >= 38) console.log('You have a fever!');
  else console.log('You do not have a fever');
}


// ---------- Exercise 8 ----------
function runExercise8() {

  let grade = readLine('Enter your grade (A, B, C, D or E: ').toUpperCase();

  switch (grade) {
    case 'A': console.log('A is an excellent grade!'); break;
    case 'B': console.log('B is a good grade!'); break;
    case 'C': console.log('C is a decent grade'); break;
    case 'D': console.log('D is a rather bad grade'); break;
    case 'E': console.log('E is a very bad grade!'); break;
    default: console.log(`${grade} is not even a grade!`); break;
  }
}


// ---------- Exercise 9 ----------
function runExercise9() {

  let input = readLine('Enter a string (palindrome check): ');
  let cleanedString = input.replaceAll(/[^\w]/g, "");
  cleanedString = cleanedString.toLocaleLowerCase();

  let isPalindrome: boolean = true;

  if (cleanedString.length <= 1) {
    console.log(`${input} is a palindrome`);
  } else {

    for (let i = 0; i < cleanedString.length; i++) {
      if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }

    if(isPalindrome) console.log(`${input} is a palindrome`);
    else console.log(`${input} is not a palindrome`);
  }
}


// ---------- Exercise 10 ----------
function runExercise10() {

  let start: string;
  let final: string;
  let index: number;

// ----- 10A -----
  start = 'The quick fox Jumped Over the DOG';

  final = start.replace('quick', 'brown');
  final = final.toLowerCase();
  index = final.indexOf('dog')
  final = final.slice(0, index) + "lazy " + final.slice(index);
  final = final[0].toUpperCase() + final.slice(1);

  console.log(`Original: ${start}`);
  console.log(`Final: ${final}`);
  console.log();

// ----- 10B -----
  const first: string = readLine('Enter first word: ');
  const second: string = readLine('Enter second word: ');
  
  if (first === second) console.log(`${first} are equal to ${second}`);
  else console.log(`${first} are NOT equal to ${second}`);
  console.log();

// ----- 10C -----
  start = 'Donkey';
  final = 'M' + start.slice(1);

  console.log(`${start} --> ${final}`);
  console.log();

// ----- 10D -----
  start = 'I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.';
  final = start.replaceAll('I ', 'We ');
  final = final.replaceAll(' am ', ' are ');

  console.log(`Original: ${start}`);
  console.log();
  console.log(`Final: ${final}`);
  console.log();

// ----- 10E -----
  start = 'She is the popular singer.';
  index = start.indexOf('popular');
  final = start.slice(0, index) + 'most ' + start.slice(index);

  console.log(`Original: ${start}`);
  console.log(`Final: ${final}`);
  console.log();

// ----- 10F -----
  start = 'A friend is the asset of your life.';
  let firstIndex = start.indexOf('friend');
  let secondIndex = start.indexOf('asset');
  final = start.slice(0, firstIndex) + 'true ' + start.slice(firstIndex, secondIndex) + 'greatest ' + start.slice(secondIndex, start.length - 1);

  console.log(`Original: ${start}`);
  console.log(`Final: ${final}`);
  console.log();

// ----- 10G -----
  start = 'My name is Sebastian Vallin.';
  index = start.indexOf('Sebastian');
  final = start.slice(index, start.length - 1);

  console.log(`Original: ${start}`);
  console.log(`Final: ${final}`);
  console.log();

// ----- 10H -----
  start = 'Arrays are very common in programming, they look something like: [1,2,3,4,5]';
  index = start.indexOf('[');
  final = start.slice(index);
  final = final.replace('2,3,4,5', '4,5,6,7,8');

  console.log(`Original: ${start}`);
  console.log(`Final: ${final}`);
  console.log();
}


// ---------- Exercise 11 ----------
function runExercise11() {
  console.log('Enter two operands and a operator');

  let operand1: number;
  let operand2: number;
  let operator: string;
  let result: number;

  do {
    operand1 = Number(readLine('First operand: '));
  } while (Number.isNaN(operand1));

  operator = readLine('Operator (+, -, *, /): ');

  do {
    operand2 = Number(readLine('Second operand: '));
  } while (Number.isNaN(operand2));

  switch (operator) {
    case '+': result = operand1 + operand2; break;
    case '-': result = operand1 - operand2; break;
    case '*': result = operand1 * operand2; break;
    case '/': result = operand1 / operand2; break;
    default: result = Number.NaN; break;
  }

  console.log(`${operand1} ${operator} ${operand2} = ${result}`);
}


// ---------- Excercise 12 ----------
function runExercise12() {

  let number: number;
  
  do {
    number = Number(readLine('Enter a number between 1 and 99: '));
  } while(Number.isNaN(number) || number < 0 || number > 100);
  
  let str = '';

  // For-loop
  console.log('\nFor-loop');
  for (let i = 1; i <= number; i++) {
    str += `${i} `;
  } 
  console.log(str);
  str = '';

  for (let i = number; i >= 1; i--) {
    str += `${i} `;
  } 
  console.log(str);
  str = '';

  // While-loop
  console.log('\nWhile-loop');
  let i = 1;
  while(i <= number) {
        str += `${i} `;
        i++;
  }
  console.log(str);
  str = '';

  i = number;
  while(i >= 1) {
        str += `${i} `;
        i--;
  }
  console.log(str);
  str = '';

  // Do-While-loop
  console.log('\nDo-While-loop');
  i = 1;
  do {
      str += `${i} `;
      i++;
  } while (i <= number);
  console.log(str);
  str = '';

  i = number;
  do {
      str += `${i} `;
      i--;
  } while (i >= 1);
  console.log(str);
}


// ---------- Excercise 13 ----------
function runExercise13() {
  const secretNumber: number = Math.floor(Math.random() * 10) + 1;  
  let guess: number;

  console.log('Guess the secret number (1-10)');

  while(true){
    do {
      guess = Number(readLine('Guess: '));
    } while (Number.isNaN(guess) || guess < 1 || guess > 10)

    if(guess === secretNumber) {
      console.log('Congratulations! That was correct!');
      break;
    } else {
      console.log('That was not the secret number!');
      
      let guessAgain: string;
      do {
        guessAgain = readLine('Do you want to guess again? (yes/no) ').toLowerCase();
      } while (guessAgain !== 'yes' && guessAgain !== 'no');

      if(guessAgain === 'no') break;
    }
  }
}


// ---------- Excercise 14 ----------
function runExercise14() {
  let str = '';
  
  for(let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      str += `${i * j}\t`;
    }
    console.log(str);
    str = '';
  }
}


// ---------- Excercise 15 ----------
function runExercise15() {
  let str = '';

  for(let i = 5; i >= 1; i--) {
    for (let j = 1; j <= 7 - i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= i; k++) {
      str += '* ';
    }
    console.log(str);
    str = '';
  }
}


// ---------- Excercise 16 ----------
function runExercise16() {

  function numberCruncher(): void {
    let sum: number = 0;
    let count: number = 0;
    let input: number;
    let average: number;

    console.log('Enter numbers. Enter 0 to quit.');

    while(true) {

      do {
        input = Number(readLine('Number: '));
      } while (Number.isNaN(input));

      if (input === 0) break;

      sum += input;
      count++;
    }

    if(count === 0) average = 0;
    else average = sum / count;

    console.log(`Sum: ${sum}    Average: ${average.toFixed(2)}`);
  }

  numberCruncher();
}


// ---------- Excercise 17 ----------
function runExercise17() {

  // The Fibonacci sequence is a series of numbers where each number (Fibonacci number) 
  // is the sum of the two preceding ones, usually starting with 0 and 1

  const fib: number[] = [0, 1];
  let input: number;
  
  do {
    input = Number(readLine('How many fibonacci numbers?: '));
  } while (Number.isNaN(input) || input < 1 ); 

  if (input === 1) console.log(fib[0]);
  else if (input === 2) console.log(...fib);
  else {
    for (let i = 3; i <= input; i++) {
      fib.push(fib[i - 3] + fib[i - 2]);
    }

    console.log(...fib);
  }
}


// ---------- Excercise 18 ----------
function runExercise18() {
  return null;
}


// ---------- Excercise 19 ----------
function runExercise19() {

  function calcTriangleArea(height: number, width: number): number {
    return (height * width) / 2;
  } 

  let height: number;
  let width: number;

  console.log('Calculating the area of a triangle.');

  do {
    height = Number(readLine('Height: '));
  } while(Number.isNaN(height) || height < 0);

    do {
      width = Number(readLine('Width: '));
  } while(Number.isNaN(width) || width < 0);

  console.log(`Area: ${calcTriangleArea(height, width).toFixed(2)}`);  
}


// ---------- Excercise 20 ----------
// This function will only show that swap does not work, only the local copies in
// the function are swapped 
function runExercise20() {
  let x = 1;
  let y = 2;

  function swap(x: number, y: number): void {
    let temp: number;
    temp = x;
    x = y;
    y = temp;
    console.log(`Inside Swap: x = ${x}  y = ${y}`);
  }

  console.log(`Before Swap: x = ${x}  y = ${y}`);
  swap(x, y);
  console.log(`After Swap: x = ${x}  y = ${y}`);
}


// ---------- Excercise 21 ----------
function runExercise21() {

  let year: number;
  let month: number;
  let date: number;

  function calcAge(year: number, month: number, date: number): number {
    const now: Date = new Date();
    let age: number = now.getFullYear() - year;

    if (now.getMonth() + 1 < month) return --age;
    else if (now.getMonth() + 1 === month && now.getDate() < date) return --age;
    else return age;
  }

  console.log('Enter your birthdate.');
  
  do {
    year = Number(readLine('Year: '));
  } while (Number.isNaN(year));

  do {
    month = Number(readLine('Month: '));
  } while (Number.isNaN(month) || month < 1 || month > 12);

  do {
    date = Number(readLine('Date: '));
  } while (Number.isNaN(date) || date < 1 || date > 31);  // sloppy date-check

  console.log(`You are ${calcAge(year, month, date)} years old`);
}


// ---------- Excercise 22 ----------
function runExercise22() {
  
  function calcAge(year: number, month: number, date: number): number {
    const now: Date = new Date();
    let age: number = now.getFullYear() - year;

    if (now.getMonth() + 1 < month) return --age;
    else if (now.getMonth() + 1 === month && now.getDate() < date) return --age;
    else return age;
  }
  
  
  const name: string = readLine('Hello What is your name?: ');

  let year: number;
  let month: number;
  let date: number;

  console.log(`Hello ${name}! What is your birthdate?`);

  do {
    year = Number(readLine('Year: '));
  } while (Number.isNaN(year));

  do {
    month = Number(readLine('Month: '));
  } while (Number.isNaN(month) || month < 1 || month > 12);

  do {
    date = Number(readLine('Date: '));
  } while (Number.isNaN(date) || date < 1 || date > 31);  // sloppy date-check

  const age: number = calcAge(year, month, date);

  let input: string;

  if (age >= 18) {
    do {
      input = readLine('Do you want a beer? (yes/no): ').toLowerCase();
    } while (input !== 'yes' && input !== 'no');

    if (input === 'yes') {
      console.log('Your beer has been served!');
    }
    else {
      do {
        input = readLine('Do you want a soda? (yes/no): ').toLowerCase();
      } while (input !== 'yes' && input !== 'no');

      if (input === 'yes') {
        console.log('Your soda has been served!');
      }
      else {
         console.log('I am sorry, we do not have anything else to offer!');
      }
    }
  }
  else {
    do {
        input = readLine('Do you want a soda? (yes/no): ').toLowerCase();
      } while (input !== 'yes' && input !== 'no');

      if (input === 'yes') {
        console.log('Your soda has been served!');
      }
      else {
         console.log('I am sorry, we do not have anything else to offer!');
      }
  }
}


// ---------- Excercise 23 ----------
function runExercise23() {

  function findMax(numbers: number[]): number {
    let temp: number = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
      if(numbers[i] > temp) temp = numbers[i];
    }

    return temp;
  }

  const numbers: number[] = [4, -2, 8, -7, 2];

  console.log(`Original array: ${numbers}`);
  console.log(`Largest value: ${findMax(numbers)}`);
}


// ---------- Excercise 24 ----------
function runExercise24() {

  function minMax(numbers: string[]): [min: number, max: number, average: number] {
    let min: number = Number(numbers[0]);
    let max: number = Number(numbers[0]);
    let sum: number = Number(numbers[0]);
    let average: number = 0;

    for(let i = 1; i < numbers.length; i++) {
      let num = Number(numbers[i]);
      if (num > max) max = num;
      if (num < min) min = num;
      sum += num;
    }
    average = sum / numbers.length;

    return [min, max, average];
  }

  let numbers: string[];
  let input: string;
  let result: [min: number, max: number, average: number]

  input = readLine('Enter a comma separated list of numbers(eg. 1,2,34,83,19,45): ');
  numbers = input.split(',');
  result = minMax(numbers);

  console.log(`Min: ${result[0]}  Max: ${result[1]}  Average: ${result[2].toFixed(2)}`);
}


// ---------- Excercise 25 ----------
function runExercise25() {

  const numbers: number[] = [];
  const even: number[] = [];
  const odd: number[] = [];

  for(let i = 1; i <= 20; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }

  for(let i of numbers) {
    if (i % 2 === 0) even.push(i);
    else odd.push(i);
  }

  console.log(`All numbers: ${numbers}`);
  console.log(`Even numbers: ${even}`);
  console.log(`Odd numbers: ${odd}`);
}


// ---------- Excercise 26 ----------
function runExercise26() {

  const numbers: number[] = [];
  let str = '';

  console.log('Enter 10 numbers');
  for(let i = 1; i <= 10; i++) {
    let num: number;

    do {
      num = Number(readLine(`Number ${i}: `));
    } while (Number.isNaN(num));

    numbers.push(num);
    }


    for(let i of numbers) {
      if (i < 0) str += `${i} `;
    }

    console.log('\nNegative numbers: ' + str);
}


// ---------- Excercise 27 ----------
function runExercise27() {
  const numbers: number[] = [];
  const even: number[] = [];
  const odd: number[] = [];

  console.log('Enter 12 integers');
  for(let i = 1; i <= 12; i++) {
    let num: number;

    do {
      num = Number(readLine(`Number ${i}: `));
    } while (!Number.isInteger(num));

    numbers.push(num);
  }

  for(let i of numbers) {
    if (i % 2 === 0) even.push(i);
    else odd.push(i);
  }

  console.log(`\nAll numbers: ${numbers}`);
  console.log(`Even numbers: ${even}`);
  console.log(`Odd numbers: ${odd}`);
}


// ---------- Excercise 28 ----------
function runExercise28() {

  const original: number[] = [];
  
  for(let i = 1; i <= 10; i++) {
    original.push(Math.floor(Math.random() * 100) + 1);
  }

  const sorted: number[] = new Array(original.length);

  let start: number = 0;
  let end: number = original.length - 1;
  
  for(let n of original) {
    if(n % 2 === 0) {
      sorted[start] = n;
      start++;
    }
    else {
      sorted[end] = n;
      end--;
    }
  }

  console.log('Generated array: ' + original);
  console.log('Result: '+ sorted);
}


// ---------- Excercise 29 ----------
function runExercise29() {

  const length: number = Math.floor(Math.random() * 11) + 5;  
  const numbers: number[] = new Array(length);

  for(let i = 0; i < length; i++) numbers[i] = Math.floor(Math.random() * 100) + 1;  

  console.log('Before sorting: ' + numbers);

  // Bubblesort
  let done: boolean;
  let num: number;

  do {
    done = true;

    for(let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[i - 1]) {
        num = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = num;
        done = false;
      }
    }
  } while(!done);

  console.log('After sorting: ' + numbers);
}


// ---------- Excercise 30 ----------
function runExercise30() {

  // Creating the array
  const length: number = Math.floor(Math.random() * 11) + 5;  
  const numbers: number[] = new Array(length);

  // Filling the array
  for(let i = 0; i < length; i++) {
    let num: number;
    
    num = Math.floor(Math.random() * 20) + 1;  

    if(numbers.indexOf(num) === -1) {
      numbers[i] = num;
    } else {
      i--;
      continue;
    }
  }
    
  // Bubblesort
  let done: boolean;

  do {
    let num: number;
    done = true;

    for(let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[i - 1]) {
        num = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = num;
        done = false;
      }
    }
  } while(!done);

  // The new array & user input
  const computed: number[] = new Array(length);
  let input: string;

  do {
    input = readLine('Do you want squares(1) or cubes(2)?: ');
  } while(input !== '1' && input !== '2');

  console.log('\nOriginal: ' + numbers);

  if(input === '1') {
    for(let i = 0; i < length; i++) computed[i] = numbers[i] ** 2;
    console.log('\nSquares: ' + computed);
  } else {
    for(let i = 0; i < length; i++) computed[i] = numbers[i] ** 3;
    console.log('\nCubes: ' + computed);
  }
}


// ---------- Excercise 31 ----------
function runExercise31() {
  let input: number;
  const now: Date = new Date();

  do {
    input = Number(readLine('What is the current year?: '));
  } while(Number.isNaN(input));

  if (input === now.getFullYear()) console.log(`Yes! ${input} is the current year`);
  else console.log(`No! ${input} is not the current year`);
}


// ---------- Excercise 32 ----------
function runExercise32() {

  const today: Date = new Date();
  let yesterday: Date = new Date();
  let tomorrow: Date = new Date();

  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);

  console.log(`Today: ${today.toDateString()} / ${today.toLocaleDateString()}`);
  console.log(`Yesterday: ${yesterday.toLocaleDateString()}`);
  console.log(`Tomorrow: ${tomorrow.toLocaleDateString()}`);
}


// ---------- Excercise 33 ----------
function runExercise33() {

  const input: string = readLine('Enter a date in the format YYYY-MM-DD: ');
  
  const date: Date = new Date(input);
  const now: Date = new Date();

  if(date.getFullYear() < now.getFullYear()) console.log('Past Year');
  else if(date.getFullYear() > now.getFullYear()) console.log('Future Year');
  else console.log('Current Year');
}


// ---------- Excercise 34 ----------
function runExercise34() {
// If the year is divisible by four, it's a leap year. But if the year can be divided by 100 as 
// well as four, it's not a leap year. However, if the year is divisible by 400, it is a leap year.
  function isLeapYear(year: number): boolean {

    if(year % 4 !== 0) return false;
    else if(year % 400 === 0) return true;
    else if(year % 100 === 0) return false;
    else return true;  
  }

  let year: number = 1990;
  let str: string = '';

  while(year <= 2026) {
    if(isLeapYear(year)) str += `${year} `;
    year++;
  }

  console.log(str);
}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1: runExercise1(); break;
      case 2: runExercise2(); break;
      case 3: runExercise3(); break;
      case 4: runExercise4(); break;
      case 5: runExercise5(); break;
      case 6: runExercise6(); break;
      case 7: runExercise7(); break;
      case 8: runExercise8(); break;
      case 9: runExercise9(); break;
      case 10: runExercise10(); break;
      case 11: runExercise11(); break;
      case 12: runExercise12(); break;
      case 13: runExercise13(); break;
      case 14: runExercise14(); break;
      case 15: runExercise15(); break;
      case 16: runExercise16(); break;
      case 17: runExercise17(); break;
      case 18: runExercise18(); break;
      case 19: runExercise19(); break;
      case 20: runExercise20(); break;
      case 21: runExercise21(); break;
      case 22: runExercise22(); break;
      case 23: runExercise23(); break;
      case 24: runExercise24(); break;
      case 25: runExercise25(); break;
      case 26: runExercise26(); break;
      case 27: runExercise27(); break;
      case 28: runExercise28(); break;
      case 29: runExercise29(); break;
      case 30: runExercise30(); break;
      case 31: runExercise31(); break;
      case 32: runExercise32(); break;
      case 33: runExercise33(); break;
      case 34: runExercise34(); break;
      
      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
