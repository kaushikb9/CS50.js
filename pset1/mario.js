/** 

URL: https://cs50.harvard.edu/x/2020/psets/1/mario/more/
Implement a program that recreate Mario's pyramids

Input: 4
Output:
   * *
  ** **
 *** ***
**** ****

**/

const prompt = require('prompt-sync')({sigint: true});

const build = (height, layer, row, kind)=>{
	var max = row
	if(kind == " "){
		max = height - row
	}
	for(i = 1; i <= max; i++){
		layer += kind
	}
	return layer
}

const main = (height)=>{
  if(height > 0){
  	for(row = 1; row <= height; row++){
  		var layer = ""
  	  layer = build(height, layer, row, " ")
  	  layer = build(height, layer, row, "#")
  	  layer += " "
  	  layer = build(height, layer, row, "#")
  	  console.log(layer)
  	}
  }else{
  	console.log("")
  }
}

const prompter = ()=>{
  let input = prompt("Enter height of the tower (type Q to exit): ");
  if(input === "Q"){
    console.log("Bye")
  }else{
    main(input)
    prompter()  
  }
}

prompter()