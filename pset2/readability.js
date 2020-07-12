/** 

URL: https://cs50.harvard.edu/x/2020/psets/2/readability/
Implement a program that computes the approximate grade level needed to comprehend some text, per the below.

Input: Congratulations! Today is your day. You're off to Great Places! You're off and away!
Output: Grade 3

Logic: 
index = 0.0588 * L - 0.296 * S - 15.8
L is the average number of letters per 100 words in the text
S is the average number of sentences per 100 words in the text.
**/

const prompt = require('prompt-sync')({sigint: true});

const main = (text)=>{
	let words = text.split(" ")

	let totalLetters = 0
	let totalSentences = 0

	words.forEach((word)=>{
		let cleanWord = word.replace(/[.?!,;'"`:/\()]/,"")
		totalLetters += cleanWord.length
		if(word.match(/[.?!]/)){
			totalSentences += 1
		}
	})
	let L = totalLetters * 100 / words.length
	let S = totalSentences * 100 / words.length

	let grade = Math.round(0.0588 * L - 0.296 * S - 15.8)
	
	if(grade < 1){
		console.log("Before Grade 1")
	}else if(grade > 16){
		console.log("Grade 16+")
	}else{
		console.log("Grade " + grade)
	}
}

const prompter = ()=>{
  let input = prompt("Enter the text (type Q to exit): ");
  if(input === "Q"){
    console.log("Bye")
  }else{
    main(input)
    prompter()  
  }
}

prompter()