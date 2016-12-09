function forLoop(array){

for (let i = 0; i < 25; i++){
  if (i === 1){
    console.log( array + " I am 1 strange loop.")
  }
  else {
    console.log( array +  `I am ${i} strange loops.`)
  }

}
}

function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
do {
  console.log(array.shift)}
while (array.length > 0 && maybeTrue())
  return array
}
  
