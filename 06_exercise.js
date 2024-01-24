// write a program to add 2 number and take input from the user at run time and make use of these assignment operators.
// stdin 
// stdout
// Using const for constant values
const promptMessage = 'Enter a number: ';

// Using let for variables that may change
let num1, num2;

// Using var for variables if you're not using a modern version of Node.js
// var num1, num2;

// Create a function to  cxhandle input and perform addition
function addNumbers() {
  process.stdout.write(promptMessage);

  // Listen for user input on the standard input stream
  process.stdin.once('data', (input1) => {
    // Parse the input to a float and assign to the variable
    num1 = parseFloat(input1);

    process.stdout.write(promptMessage);

    // Listen for the second input
    process.stdin.once('data', (input2) => {
      // Parse the input to a float and assign to the variable
      num2 = parseFloat(input2);

      // Using const for a constant result
      const result = num1 + num2;

      // Print the result
      console.log(`The sum of ${num1} and ${num2} is: ${result}`);

      // Close the standard input stream
      process.stdin.destroy();
    });
  });
}

// Call the function to start the program
addNumbers();
