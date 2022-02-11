// normal array concat() method
let arr = [1,2,3];
let arr2 = [4,5];
arr = arr.concat(arr2);
document.write(arr+"<br/>"); 
// spread operator doing the concat() method
let arr3 = [1,2,3];
let arr4 = [4,5];
arr = [...arr3,...arr4];
document.write(arr+"<br/>");
// copying without the spread operator
let arr5 = ['a','b','c'];
let arr6 = arr5;

document.write(arr6+"<br/>"); 
// spread operator for copying
let arr7 = ['a','b','c'];
let arr8 = [...arr7];

document.write(arr7+"<br/>"); 

arr8.push('d'); 

document.write(arr8+"<br/>"); 
document.write(arr7+"<br/>"); 
// normally used expand method
let ar = ['a','b'];
let ar2 = [ar,'c','d'];

console.log(ar2); // [ [ 'a', 'b' ], 'c', 'd' ]
// expand using spread operator

let arr9 = ['a','b'];
let arr10 = [...arr9,'c','d'];

document.write(arr10+"<br/>"); 
// min in an array using Math.min()
let arr11 = [1,2,3,-1];
document.write(Math.min(arr11)+"<br/>");
// with spread
let arr12 = [1,2,3,-1];

document.write(Math.min(...arr)+"<br/>"); 

//objects with out using the spread operator
const user1 = {
	name: 'Jen',
	age: 22
};
const clonedUser = { ...user1 };
document.write(clonedUser+"<br/>");
//objects using the spread operator
const user2 = {
	name: 'Jen',
	age: 22,
};

const user3 = {
	name: "Andrew",
	location: "Philadelphia"
};

const mergedUsers = {...user2, ...user3};
document.write(mergedUsers+"<br/>");


