
    function fun(...input){
      let sum = 0;
      for(let i of input){
      sum+=i;
      }
      return sum;
      }
      document.write(fun(1,2)+"<br/>"); 
      document.write(fun(1,2,4)+"<br/>"); 
      document.write(fun(1,2,4,6)+"<br/>");
      let group = {
        title: "Our Group",
        students: ["sunny", "funny", "runny"],
      
        showList() {
          this.students.forEach(
            student => document.write(this.title + ': ' + student+"<br/>")
          );
        }
      };
      
     document.write (group.showList()+"<br/>");

// object
var emp=new Object();  
emp.id=101;  
emp.name="Ravi ";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary+"<br/>");  

const student = { 
    name: 'name', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
document.write(student.marks +"<br/>"); 
document.write(student.marks.science +"<br/>");

let re = /hi/;
let res = re.test('hi bhavna');

document.write(res+"<br/>"); 