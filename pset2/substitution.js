/** 

URL: https://cs50.harvard.edu/x/2020/psets/2/substitution/
Implement a program that implements a substitution cipher, per the below.

cipher: JTREKYAVOGDXPSNCUIZLFBMWHQ
plaintext:  HELLO 
ciphertext: VKXXN

Note: This implementation does both encryption and decryption

**/

const prompt = require('prompt-sync')({sigint: true});

function converter(char, type, key){

	original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	originalArr = original.split("")
	keyArr = key.split("")

	switch(type){
		case "encrypt": 
			originalPostion = originalArr.indexOf(char)
			if(originalPostion === -1){
				return "invalid"
			}else{
				return keyArr[originalPostion]	
			}
		case "decrypt":
			keyPosition = keyArr.indexOf(char)
			if(originalPostion === -1){
				return "invalid"
			}else{
				return originalArr[keyPosition]	
			}	
		default: {
			return "invalidKey"
		}	
	}
}

function decrypter(cipherText, key){
  decryptedText = cipherText.split("").map((char)=>{
  	return converter(char, "decrypt", key)
  })
  console.log("plain:",decryptedText.join(""))
}

function encrypter(plaintext, key){
  encryptedText = plaintext.split("").map((char)=>{
  	return converter(char, "encrypt", key)
  })
  console.log("ciphertext:",encryptedText.join(""))
}

const prompter = ()=>{

	console.log("\nCipher Menu");  	
	const programs = `
	1. encrypt
	2. decrypt
	Q. Exit Prompt\n`
	console.log(programs);
  let input = prompt("What operation do you want to do (type Q to exit): ");
  if(input === "Q"){
    console.log("Bye")
  }else{
  	let cipherKey = prompt("cipherKey:");
  	if(input === "1" || input === "encrypt"){
  		let text = prompt("plaintext:");
  		encrypter(text, cipherKey);
  	}else if(input === "2" || input === "decrypt"){
  		let text = prompt("ciphertext:");
  		decrypter(text, cipherKey);
  	}
    prompter()  
  }
}

prompter()
