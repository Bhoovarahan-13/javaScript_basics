//  Sample Calculator 

// initilze value are n1 and n2
let n1=10;
let n2=20;

// we choice the operator wheather "+,-,*,/"
let operator="/";

// if else statement for operators

if (operator==="+"){
    console.log(n1+n2); // 10+20=30
}
else if(operator==="-"){
    console.log(n1-n2); //10-20=-10
    
}
else if(operator==="*"){
    console.log(n1*n2); //10*20=200
    
}
else if(operator==="/"){
    if(n2!=0){
        console.log(n1/n2); //10/20=0.5
        
    }
    else{
        console.log("n2 is cannot divided");
        
    }
}
else{
    console.log("Invalid operator");
    
}

console.log("=============================");


// Task 

// initilize value 

let marks = 90;
let bonus = 6;
// add bonus marks 
marks+=bonus;

// grades A,B,C,D using if else statement 

let grade;

if (marks>=90 && marks<=100){
    grade="Grade A";
}
else if(marks>=70 && marks <=89){
    grade="Grade B";
}

else if(marks>=50 && marks <=69){
    grade="Grade C";
}
else{
    grade="Grade F";   
}

//Pass or Fail using ternary operator 

let result=marks>=50 ? "Pass" : "Fail";
console.log("Result :",result);

// Remarks for grades using switch statement 

let remarks;
switch(grade){
    case "Grade A":{
        remarks="Excellent";
        break;
    }
    case "Grade B":{
        remarks="Good";
        break;
    }
    case "Grade C":{
        remarks="Average";
        break;
    }
    case "Grade F":{
        remarks="Needs Improvement";
        break;
    }
    default:
        remarks="Invalid grades"
}

// Result 
console.log("Marks: ",marks);
console.log("Grades :",grade);
console.log("Result :",result);
console.log("Remarks :",remarks);

console.log("=============================");