function stringChop(str, size) {

	if(!str)return[];
	
	let chunk =[];
	for(let i=0;i<str.length;i+=size){
	    chunk.push(str.slice(i,i+size))
	}
	return chunk;
  // your code here
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
