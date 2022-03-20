///classes in typescript
class Polygon {
    constructor(height, width) {
    this.h = height;
    this.w = width;
   ES6
   285
    }
    test()
    {
    console.log("The height of the polygon: ", this.h)
    console.log("The width of the polygon: ",this. w)
    }
   }
   //creating an instance
   var polyObj= new Polygon(10,20);
   polyObj.test();


//inheritance

   class Shape
{
constructor(a)
{
this.Area=a
}
}
class Circle extends Shape
{
disp()
{ console.log("Area of the circle: "+this.Area) }
}
var obj=new Circle(223);
obj.disp()


//maps()
<script>
let daysMap = new Map();
daysMap.set('1', 'Monday');
daysMap.set('2', 'Tuesday');
daysMap.set('3', 'Wednesday');
console.log(daysMap.size);
</script>


//set()
<script>
 let andy ={ename:"Andrel"},
 varun = {ename:"Varun"},
 prijin={ename:"Prijin"}
 let empJobs = new Map();
 empJobs.set(andy,'Programmer')
 empJobs.set(varun,'Accountant')
 empJobs.set(prijin,'HR')
 console.log(empJobs)
 </script>






 //rest parameter by typescript
 var score = (a:number, ...args:number) => {  
    console.log(a + " " + args);  
}  
score(100,200,300,400,500,600,700,800); 

//default parameter by typescript
function myFunction2(arg1:number= 1 , arg2:number = 2, arg3:number=3){  
  
    console.log(arg1, arg2, arg3);  
}  
  
myFunction2(1, 3);//(1,3,3)//default parameters

//maps()
let daysMap = new Map();
daysMap.set('1', 'Monday');
daysMap.set('2', 'Tuesday');
daysMap.set('3', 'Wednesday');
console.log(daysMap.size);
console.log(daysMap.get('1'));
console.log(daysMap.get('2'));
console.log(daysMap.has('2'));
console.log(daysMap.delete('32'));

//set()
 let andy ={ename:"Andrel"},
 varun = {ename:"Varun"},
 prijin={ename:"Prijin"}
 let set = new Set();
 set.add('andrel');
 
 console.log();
  console.log(set.size);
   console.log(set.delete(varun));




//Promise method

    const Promise = num => {  
    return new Promise((resolve,reject) => {  
      if((num%2)==0){  
        resolve("Success!")  
      }  
      reject("Failure!")  
    })  
  }  
  let success = (a) => {  
    console.log(a + " it worked!")  
  }  
    
  let error = (a) => {  
    console.log(a + " it failed!")  
  }  
    
  Promise(100).then(success, error)  
  Promise(21).then(success,error)



//const larStuId=students.reduce(function(large,stu){
    return(large.id || 0 ) > stu.id ? large:stu;
},{});
console.log(larStuId);//



   






    