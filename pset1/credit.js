// American Express numbers start with 34 or 37
// MasterCard numbers start with 51, 52, 53, 54, or 55
// Visa numbers start with 4

// Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.
// Add the sum to the sum of the digits that weren’t multiplied by 2.
// If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

// Example
// Number: 4003600000000014
// VISA

const prompt = require('prompt-sync')({sigint: true});

const cc_verification = (cc_number)=>{
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
		let checksum1 = 0;
		reversed_cc_arr.filter((number, index)=>{
			if(index%2 === 1){
				let product = parseInt(number)*2;
				if(product >= 10){
					product = product-10+1
				}
				checksum1 += product;
				checksum += product;
			}else{
				checksum += parseInt(number);
			}
		})
		if(checksum%10 !==0){
			card_type = "INVALID"
		}	
	}
	return card_type
}

const prompter = ()=>{
  let cc_number = prompt("Enter credit card number? (type Q to exit): ");
  if(cc_number === "Q"){
    console.log("Bye")
  }else{
    const card_type = cc_verification(cc_number)
    console.log(card_type)
    prompter()  
  }
}

prompter()