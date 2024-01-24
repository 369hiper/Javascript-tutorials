// write a program to add 2 number and take input from the user at run time and make use of these assignment operators.
// stdin 
// stdout

const promptMessage = "Enter a number: ";

// using let for variable that may change
let num1, num2;

// create a functiom to handle input and perform operation
function addNumbers(){
    // Listen for user input on the standard input stream
    process.stdin.once('data', (input1) => {

        num1 = parseFloat(input1)
        process.stdout.write(promptMessage);
    }
    )
    process.stdin.once('data', (input2) => {

        num2 = parseFloat(input2)
    }
    )

    const result = num1 + num2

    // print the result

    console.log(`the sum of $(num1) and $(num2) is: $(result)`)

    process.stdin.destroy();
};



addNumbers();


