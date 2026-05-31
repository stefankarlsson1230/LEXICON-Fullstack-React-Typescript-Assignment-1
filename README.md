# LEXICON - Fullstack React
## Typescript
### Assignment 1

TypeScript Basic Assignments
Linköping Page 1 of 8
Prerequisite
To begin, clone the repository template from GitHub. This approach allows you to work easily from home. You must solve all the exercises in a single file. To ensure a structured approach, each exercise should be solved in a separate method, and you should call the respective method in a switch case. Start with the provided project, which contains sample code, and add new methods for subsequent exercises.
Mathematical Operators
TypeScript uses the standard order of operations for calculations, so (), *, /, and % (modulo) have priority over + and -.
When dividing integers in TypeScript, integer division is not used by default. This means 10 / 3 will yield the result 3.333… as you might expect. However, if you want to perform integer division similar to C#, you can use the Math.floor function to discard the fractional part: Math.floor(10 / 3) which yields 3.
To get the remainder, use the modulo operator like let remainder = 10 % 3; which yields 1.
To get the floating-point result, you simply perform the division, as TypeScript will handle floating-point numbers by default: let result = 10 / 3; which yields 3.333....
Type casting does not change the variable type permanently. When type casting a floating-point number to an integer, the number will be truncated. For example: let truncated = Math.floor(3.9999); will result in 3.
Basic Exercises
Exercise 1
Declare two string variables, one of them is going to store your first name and the other your last name, so assign them informative names. Then let the program print following output on a console:
“Hello<firstname><lastname>! I am glad to inform you that you are the test subject of my very first assignment!”
Example: Hello Sebastian Vallin! I am glad to inform you that you are the test subject of my first assignment!
Exercise 2
Ask user to enter there firstname and lastname from the console and greet the user by name and the phrase ‘Have a nice day!’
Example: "Hello Sebastian Vallin! Have a nice day!"
TypeScript Basic Assignments
Linköping Page 2 of 8
Exercise 3
A)
Add any two integer numbers and store the sum result in a variable of type double, display the result.
B)
Store an even number and an odd number in two different integer variables. Divide odd number by even number and display an accurate result.
Exercise 4 (Optional)
Ask user to enter a value of a radius. Calculate the area of a circle and the area of a sphere and display the results on the console.
Conditional Exercises
Exercise 5
Ask user to enter two consecutive numbers and write the code to validate them (are they consecutive or not?) and display message accordingly
Example 1: User enters: 2, 3
Result: Consecutive
Example 2: User enters: 4, 6
Result: Not consecutive
Exempla 3: User enters 8, 7
Result: Consecutive
Exercise 6
Ask user to enter any positive integer, check, and display message whether number is even or odd
Exercise 7
Ask user to enter their body temperature in degree Celsius. Display him a message if he has a fever or not.
Exercise 8
Ask user to enter his grade of exam (A, B, C, D, E) and print a relevant message for the user as per the grade they have.
TypeScript Basic Assignments
Linköping Page 3 of 8
Exercise 9
Let the user input any string, then check if the string is a palindrome sentence or not and display that result.
Example 1: Entered “A man, a plan, a canal – Panama”
Result: A man, a plan, a canal – Panama is a palindrome.
Example 2: Entered Aibohphobia
Result Aibohphobia is a palindrome.
Example 3: Entered Palindrome
Result: Palindrome is not a palindrome.
Exercise 10
String manipulation
A)
Change string “The quick fox Jumped Over the DOG” to the string “The brown fox jumped over the lazy dog” using required string manipulation functions.
B)
Enter any two words from console and check whether they are same words or not.
C)
Input word Donkey and display it as the word Monkey on the console.
D)
Replace ‘I’ with ‘We’ and ‘am’ with ‘are’ in given text below.
“I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.”
E)
Actual string is "She is the popular singer." and the expected string is "She is the most popular singer."
F)
Actual string is "A friend is the asset of your life." and the expected string is "A true friend is the greatest asset of your life"
G)
Actual string is "My name is Sebastian Vallin." Expected string: "Sebastian Vallin"
H)
Actual string is "Arrays are very common in programming, they look something like: [1,2,3,4,5]" Expected string: "[1,4,5,6,7,8]"
Exercise 11 (Optional)
Write a program that asks user an arithmetic operator ('+','-','*' or '/') and two operands. Perform the corresponding calculation on the operands and display the result (use switch case).
TypeScript Basic Assignments
Linköping Page 4 of 8
Loop Exercises
Exercise 12
Ask user to enter any number smaller than 100. Print all values from 1 to the entered number in ascending and descending order.
Write the same thing using the different loops (for, while and do-while).
Exercise 13
Generate a random number and save it to a variable, SecretNumber.
If he/she misses the first guess ask the user if he/she wants to guess the number again. Repeat the guessing until user answers no or guess the correct number.
Limit the secret number to be from 1 to 10 so that it not become to hard to guess right.
Exercise 14
Display the following multiplication table shown below on the console.
Exercise 15 (Optional)
Print the following * pattern on console using loop
TypeScript Basic Assignments
Linköping Page 5 of 8
Exercise 16 (Optional)
Write a method that keeps asking the user to enter numbers, until the user enters 0. Then displays a sum and average of all numbers entered before 0
Exercise 17 (Optional)
Ask the user to enter the number of values to display from the Fibonacci series, this number can be ither number of values to display or max number to display (you only need to implement one of those two). Calculate and display the selected number from the Fibonacci series on the console.
Example Entered 7
Result 0, 1, 1, 2, 3, 5, 8 (assuming the max number off values was implemented)
Function Exercises
Exercise 19
Ask the user for the height and width of a triangle. Call a function to calculate the area of a triangle and have
height and width as parameters to that function. The function returns the area. Display the result in the console.
Exercise 20
Write a swap function for swapping two numbers that you call. Pass values as parameters. Print the swapped values inside function as well at the next line where you called this function.
Exercise 21
Ask the user to enter their date of birth. Call a method to calculate the current age and return the value in years. Display the age on the console
Exercise 22
Ask the user to enter his name and save it into a “name” variable.
Greet the user by name and ask for his/her birth date. Call the method you used in previous exercise to calculate the age of the user.
Depending on the users age (18 or over) you ask if user wants to order a beer. If yes, display a message about the beer being served. If no, then ask if user wants a soda instead. If yes, the display a message stating that a soda has been served otherwise display a message about that no more options is available.
If on the other hand the user is below 18 then ask if user wants to order a soda.
If yes, serve the soda (with relevant message). If no, then state that you are out of options.
Below is a Flow chart diagram that shows the application flow.
TypeScript Basic Assignments
Linköping Page 6 of 8
Exercise 23 (Optional)
Write a program to find the greatest number in an array. Pass an array of 5 numbers as a parameter to a method and return the greatest number from the method and then display the result on the console.
Collection Exercises
Exercise 24
Let the user input a string with numbers comma separated like “1,2,34,83,19,45”. Convert the number string to an array and find the min, the max and the average value. (Use strings split function if required).
Exercise 25
Generate and store 20 random integer numbers in a list and separate those numbers into two new lists. One with
even numbers and one with odd numbers.
Display all 3 lists.
Exercise 26
Ask the user to enter any 10 numbers and store them in an array. Loop through the array and print only the
TypeScript Basic Assignments
Linköping Page 7 of 8
negative numbers on the console.
Exercise 27
Ask user to enter any twelve positive integer numbers. Store these numbers to an array. Display all numbers and
then separate the numbers into an odd number array and even number array. Then display these two arrays.
Exercise 28 (Optional)
Create two arrays with arbitrary size and fill one with random numbers. Then copy over the numbers from the
array with random numbers to the other array so that the even numbers are added (placed) first and odd numbers
last in the array.
Example: Generated array 1, 4, 9, 2, 17
Result 4, 2, 17, 9, 1
Exercise 29 (Optional)
Create an array. Set the size of an array as a random number between 5 and 15. Fill the array with some random
numbers from 1 to 100. Sort this array without using the built in sort method. Display the content of the array
before and after sorting.
Exercise 30 (Optional)
Create an array. Set the size of an array as a random number between 5 and 15. Fill in the array with random
numbers (positive, smaller than 20, not repeated). Sort the array. Create another array of the same size and ask the
user if he/she wants to fill in the array with either square or cube result of the values from previous array. Display
the original array and the one with either squared or cubed values.
Date Exercises
Exercise 31
Ask user to enter current year and validate it and display a message telling if it was the current year or not.
Exercise 32
Display today’s date in at least two different date formats. Also display tomorrow’s date and yesterday’s date using
short date format.
TypeScript Basic Assignments
Linköping Page 8 of 8
Exercise 33
Ask user to enter some date and write code to determine if the date is in a past, current or future year, and display
the result
Note that these examples are based on that the current year is 2024!
Example 1: Date entered 2024-01-5
Result: Current Year
Example 2: Date entered 2000-08-12
Result: Past Year
Example 3: Date entered 2025-01-01
Result: Future Year
Exercise 34 (Optional)
Display the leap years from 1990 to current year using while loop.