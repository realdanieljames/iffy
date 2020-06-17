// Your code here!

const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')


const one = getInput(0);
const two = getInput(1);

if (one === undefined){
  console.log ("You need to enter a color")
}

if (one && two === undefined){
  console.log (colorDeconstructor(one))
}

if (one && two){
  console.log(colorCombinator(one, two))
}



// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
