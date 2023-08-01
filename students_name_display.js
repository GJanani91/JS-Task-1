const students = [
{name: "Ram", section: "A",
marks: {tamil: 100, english: 78, maths: 63, science: 70, social: 89} },
{name: "Som", section: "B",
marks: {tamil: 48, english: 40, maths: 33, science: 30, social: 59} },
{name: "Kumar", section: "A",
marks: {tamil: 88, english: 75, maths: 81, science: 95, social: 90} },
{name: "Ahile", section: "A",
marks: {tamil: 92, english: 86, maths: 91, science: 95, social: 100} },
{name: "Rajesh", section: "B",
marks: {tamil: 58, english: 68, maths: 45, science: 61, social: 78} }];
let stuavg=0,s3=0;
let x,s1,s2,a,y,z;
//Display the name of all students.
displayStudentsName();
function displayStudentsName(){
    for(i=0;i<students.length;i++){
        console.log(students[i].name);
    }
}
//Display the section ‘A’ students details.
sectionADetails();
function sectionADetails(details) {
    console.log("Section 'A' Students Details:");
    for(let i=0;i<students.length;i++){
        if(students[i].section==="A")
        console.log("Name: "+students[i].name,"Tamil: "+students[i].marks.tamil,"English: "+students[i].marks.english,
        "Maths: "+students[i].marks.maths,"Science: "+students[i].marks.science,"Social: "+students[i].marks.social);
    }
  }
  //the average marks of all subjects (individually).
const tam = students.flatMap( student => student.marks.tamil);
const tarr = tam.reduce((a,b) => a+b, 0)
console.log("Tamil total: "+tarr);
t=tarr/students.length;
console.log( "tamil average:"+t);
const eng = students.flatMap( student => student.marks.english);
const earr = eng.reduce((a,b) => a+b, 0)
console.log("English total: "+earr);
t=earr/students.length;
console.log( "english average:"+t);
const mat = students.flatMap( student => student.marks.maths);
const marr = mat.reduce((a,b) => a+b, 0)
console.log("Maths total: "+marr);
t=marr/students.length;
console.log("maths average:"+t);
const sci = students.flatMap( student => student.marks.science);
const sarr = sci.reduce((a,b) => a+b, 0)
console.log("Science total: "+sarr);
t=sarr/students.length;
console.log("science average"+t);
const soc = students.flatMap( student => student.marks.social);
const ssarr = soc.reduce((a,b) => a+b, 0)
console.log("Social total: "+ssarr);
t=ssarr/students.length;
console.log("social average:"+t);
//the total marks & average mark of each student.
function totalAvgMarks(){
for(i=0;i<students.length;i++){
    s1= students[i].marks.tamil+students[i].marks.english+students[i].marks.maths+students[i].marks.science+students[i].marks.social;
console.log("The total marks of each students: "+s1);
stuavg=s1/students.length;
console.log("The average of each student: "+stuavg);
}
}
totalAvgMarks();
//average marks of all students,
function studentAverage(){
    for(i=0;i<students.length;i++){
        s2= students[i].marks.tamil+students[i].marks.english+students[i].marks.maths+students[i].marks.science+students[i].marks.social;
console.log("The total marks of each students: "+s2);
     s3=s3+s2;
    console.log(s3);
    a= s3/students.length;
    console.log(a);
    }
       }
studentAverage();
//the student, who has scored 100 in at-least one subject.

function scoreCentum(){
  for(i=0;i<students.length;i++){
   if(students[i].marks.tamil==100){
   console.log("the student scored 100 in at-least one subject: "+ students[i].name);
   }
   else if(students[i].marks.english==100){
   console.log("the student scored 100 in at-least one subject: " +students[i].name);
   }
   else if(students[i].marks.maths==100){
   console.log("the student scored 100 in at-least one subject: " +students[i].name);
   }
   else if(students[i].marks.science==100){
   console.log("the student scored 100 in at-least one subject: " +students[i].name);
   }
   else if(students[i].marks.social==100){
   console.log("the student scored 100 in at-least one subject: "+students[i].name);
   }
  }
}
scoreCentum();
//the student, who has failed in any one of the subjects. (passing mark is >=40) 
function failedSubject(){
    for(i=0;i<students.length;i++){
     if(students[i].marks.tamil<=40){
     console.log("the student failed in any one of the subjects: "+students[i].name);
     }
     else if(students[i].marks.english<=40){
     console.log("the student failed in any one of the subjects: "+ students[i].name);
     }
     else if(students[i].marks.maths<=40){
     console.log("the student failed in any one of the subjects: "+ students[i].name);
     }
     else if(students[i].marks.science<=40){
     console.log("the student failed in any one of the subjects: "+ students[i].name);
     }
     else if(students[i].marks.social<=40){
     console.log("the student failed in any one of the subjects: "+ students[i].name);
     }
    }
  }
  failedSubject();
      
       
       

  
  
  

