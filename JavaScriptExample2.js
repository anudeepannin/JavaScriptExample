
//strings example
const p = 'hello';
const q = new String('hello');

document.write(p+"<br/>"); 
document.write(q+"<br/>"); 

document.write(typeof p+"<br/>"); 
document.write(typeof q+"<br/>"); 

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';
const result1 = text1.concat(' ', text2);
document.write(result1+"<br/>");
const result2 = text1.toUpperCase();
document.write(result2+"<br/>"); 
const result3 = text3.trim();
document.write(result3+"<br/>"); 
const result4 = text1.split();
document.write(result4+"<br/>"); 
const result5= text1.slice(1, 3);
document.write(result5+"<br/>"); 
//
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
document.write(mountains[0]+"<br/>"); 
document.write(mountains[1]+"<br/>");
document.write(mountains[2]+"<br/>"); 
mountains[2] = 'K2';
document.write(mountains+"<br/>");
document.write(mountains.length+"<br/>");
mountains.push("Nanga Parbat");
document.write(mountains+"<br/>");
mountains.unshift("Nanga Parbat");
document.write(mountains+"<br/>");
const lastElement = mountains.pop();
document.write(lastElement+"<br/>"); 
let index = mountains.indexOf('K2');
document.write(index+"<br/>");
document.write(Array.isArray(mountains)+"<br/>");
// functions
function sayhi() {  
  document.write ("Hello Bhavna"+"<br/>");  
 }
 function Hello(fullname, age,gender) {  
  document.write (fullname + "and " + age + "and " + "  gender is " + gender+"<br/>");  
 }  


 function combinestring(string1, string2) {  
  var completeString;  
  completeString = string1 + string2;  
  return completeString;  
   }
  function secondFunction(){  
  var result;  
  result = combinestring('Java', 'Script');  
  document.write (result+"<br/>" );  
}
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
  })();
   
  add();
  document.write(add()+"<br/>");
//Arrow Functions
hello = () => {
  document.getElementById("demo").innerHTML += this;
  }
  window.addEventListener("load", hello);
  document.getElementById("btn").addEventListener("click", hello);
