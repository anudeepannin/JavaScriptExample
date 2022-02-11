
//var concpet
var x = 30;
 document.write(x+"<br/>"); 
 x = "Hi"; 
 document.write(x+"<br/>");
 var y = 10;
 document.write(y+"<br/>"); 
 var y = "Hello"; 
 document.write(y+"<br/>");

 //let 
 let p= 11;
document.write(p+"<br/>"); 
p = "IB";
document.write(p+"<br/>"); 
let z = 13;
if(true){
 let z = "Fun"; 
 document.write(z+"<br/>"); 
}
document.write(z+"<br/>");
let q = 12;
document.write(q+"<br/>");
let y = "Scaler"; // error: Identifier y has already been declared
//const
const s = 10;
document.write(s+"<br/>");
// s= 11; // error: Assignment to constant variable.



var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

document.write(b);