//word counter
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
let words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
