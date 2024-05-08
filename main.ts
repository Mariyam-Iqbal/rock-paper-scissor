#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let answer1 = await inquirer.prompt([{
name: "choice1",
type: "list",
choices: ["ROCK", "SCISSOR","PAPER"],
message: "what do want to select?"

}]);
let answer2 = await inquirer.prompt([{
    name: "choice2",
    type: "list",
    choices: ["ROCK", "SCISSOR","PAPER"],
    message: "which option your friend want to select?"
    
    }]);
    if (answer1.choice1 === "ROCK" && answer2.choice2 === "ROCK"){
        console.log(chalk.bgBlackBright("ITS TIE"));
        
    }else if (answer1.choice1 === "PAPER" && answer2.choice2 === "PAPER"){
        console.log(chalk.bgBlackBright("ITS TIE"));
        
    }
    else if(answer1.choice1 === "SCISSOR" && answer2.choice2 === "SCISSOR"){
        console.log(chalk.bgBlackBright("ITS TIE"));
        
    }else if (answer1 === "ROCK" && answer2.choice2 === "SCISSOR"){
        console.log(chalk.bgRedBright("ROCK WIN"));
        
    }else{
        console.log(chalk.bgBlueBright("******PAPER WIN******"));
        
    }