// input: 4
// output:
//     * *
//    ** **
//   *** ***
//  **** ****

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

const tower = (height)=>{
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
  let height = prompt("Enter height of the tower (type Q to exit): ");
  if(height === "Q"){
    console.log("Bye")
  }else{
    tower(height)
    prompter()  
  }
}

prompter()