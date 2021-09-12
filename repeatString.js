const repeatString = function(string, num){
/*
if (num < 0){
  console.log("ERROR");
  return(ERROR);
}
*/
console.log(string.repeat(num));
return(string.repeat(num));
}
repeatString('hey', 10); 
module.exports = repeatString;

