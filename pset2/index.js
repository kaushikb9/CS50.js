const prompt = require('prompt-sync')({sigint: true});

const prompter = ()=>{
	const programs = `
	1. Readability
	2. Substitution
	Q. Exit Prompt\n`
	console.log("\nProblems in Set 2", programs)

	let option = prompt("Which problem do you want to execute? (enter the problem number): ");

	switch(option){
		case "1": require("./readability"); break;
		case "2": require("./substitution"); break;
		case "Q": console.log("Bye"); break;
		default: console.log("Invalid option"); prompter()
	}
}

prompter()