/** 

URL: https://cs50.harvard.edu/x/2020/psets/1/credit/
Write a program that prompts the user for a credit card number and then reports whether it is a valid American Express, MasterCard, or Visa card number

Input: 4003600000000014
Output: VISA

Logic:
Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.
Add the sum to the sum of the digits that weren’t multiplied by 2.
If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

**/

const prompt = require('prompt-sync')({sigint: true});

const main = (cc_number)=>{
	const cc_arr = cc_number.split("");
	let card_type = "INVALID"
	if(cc_arr[0] === "3"){
		if(["4","7"].indexOf(cc_arr[1]) > -1){
			card_type = "American Express" 
		}
	}else if(cc_arr[0] === "5"){
		if(["1","2","3","4","5"].indexOf(cc_arr[1]) > -1){
			card_type = "MASTERCARD" 
		}
	}else if(cc_arr[0] === "4"){
		card_type = "VISA"
	}
	if(card_type !== "INVALID"){
		
		const reversed_cc_arr = cc_arr.reverse();
		let checksum = 0;
		reversed_cc_arr.filter((number, index)=>{
			if(index%2 === 1){
				let product = parseInt(number)*2;
				if(product >= 10){
					product = product-10+1
				}
				checksum += product;
			}else{
				checksum += parseInt(number);
			}
		})
		if(checksum%10 !==0){
			card_type = "INVALID"
		}	
	}
	console.log(card_type)
}

const prompter = ()=>{
  let input = prompt("Enter credit card number? (type Q to exit): ");
  if(input === "Q"){
    console.log("Bye")
  }else{
    main(input)
    prompter()  
  }
}

prompter()