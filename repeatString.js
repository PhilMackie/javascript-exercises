const number = Math.floor(Math.random() * 1000);

const repeatString = function(string, number){

  if (number < 0){
    console.log("ERROR");
    return('ERROR');
  }console.log(string.repeat(number));
  return(string.repeat(number));
  }
  repeatString('hey', 10); 
  module.exports = repeatString;

/*
const repeatString = function(string, num){
if (num < 0){
  console.log("ERROR");
  return('ERROR');
}console.log(string.repeat(num));
return(string.repeat(num));
}
repeatString('hey', 10); 
module.exports = repeatString;
*/
