// key: JTREKYAVOGDXPSNCUIZLFBMWHQ
// plaintext:  HELLO
// ciphertext: VKXXN


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
  return decryptedText.join("")
}

function encrypter(plaintext, key){
  encryptedText = plaintext.split("").map((char)=>{
  	return converter(char, "encrypt", key)
  })
  return encryptedText.join("")
}

encryptedText = encrypter("HELLO", "JTREKYAVOGDXPSNCUIZLFBMWHQ")
decryptedText = decrypter("VKXXN", "JTREKYAVOGDXPSNCUIZLFBMWHQ")

console.log("encryptedText ->", encryptedText)
console.log("decryptedText ->", decryptedText)

