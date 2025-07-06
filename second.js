//OPEARTORS AND CONDITINAL STATEMENTS
/*let a = 6;
let b = 8;
let c = a+b;
console.log("a+b", c);*/
//ARITHMETIC OPERATORS
// let a = 6;
// let b = 8;
// console.log("a = ", a ," & b = " , b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a%b = ", a%b );
// console.log("a ** b = ", a**b);


//UNARY OPERATOR
// let a = 6;
// let b = 8;
// console.log("a=",a , "b =", b);
//a = a+1; //7 (u can write a++ here as well to increment the value)
//a++;
//a = a-1; //a--
//pre post increment decrement
//console.log("++a", ++a);//pre increment

// console.log("a++", a++);//OUTPUT IS 6 ONLY HERE BUT IF I PRINT A AFTER THIS IT WILL SHOW AS 7
// console.log("a=",a);//nw value wil come as 7


//ASSIGNMENT OPERATORS
// let a = 5;
// let b = 6;
// a += 4; //(a = a+4)
// console.log("a=",a);//5+4 a value is 9 
// a -= 4; 
// console.log("a=",a);
// a *= 4; 
// console.log("a=",a);
// a /= 4; 
// console.log("a=",a);
// a %= 4; 
// console.log("a=",a);
// a **= 4; 
// console.log("a=",a);



//COMPARISION OPERATORS (==,===.=!, !==, >,>=,<,<=)
// let a = 5;
// let b = "5";
// console.log("a==b",a==b);
// console.log("a===b",a===b);


//LOGICAL OPERATORS (&&, || , !)
// let a = 6;
// let b = 5
// let cond1 = a>b;//true
// let cond2 = a===6;//true
// console.log("cond1 && cond2 = ", cond1 && cond2); //we can also write this as like below and we can remove cond1 and cond2 variables
// console.log("cond1 && cond2=", a>b && a===6);
// console.log("cond1 || cond2=", a>b || a===b);
// console.log("!(a>b)=", !(a>b));//false ulta



//CONDITIONAL STATEMENTS (if, if else)
// let a = 25;
// if (a>18){
//     console.log("you can vote");
// }
// if(a<18){
//     console.log("you cannot vote");
// }

// let mode = "light";
// let color;
// if (mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white"
// }
// console.log(color);


// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }else{
//     color = "white";
// }
// console.log(color);

// let age = 25;
// if(age>18){
//     console.log("vote");
// }else{
//     console.log("not vote");
// }


// let num = 5;
// if(num%2===0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }


// let mode = "green";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// else if(mode === "white"){
//     color = "light";
// }else if (mode === "pink"){
//     color = "red";
// }
// else{
//     color = "blue";
// }
// console.log(color);


// let mode = "dark";
// if (mode === "dark") console.log(mode);//u can write conditions like this aslo one line


//TERNARY OPERATOR
// let age = 25;
// let result = age>=18? "adult": "not adult"; //u can also write it as without console below line.... age>=18? console.log("adult"): console.log("not adult");
// console.log(result);



//GET A USER TO I/P A NUM USING PROMPT("ENTER A NUM"). CHECK IF THE NUM IS MULTIPLE OF 5 OR NOT.

// let num = prompt("enter a number");
// if (num%5 === 0){
//     console.log(num,"is a multiple of 5");
// }else{
// console.log(num,"is not a multiple of 5");
// }


//WRITE A CODE WHICH CAN GIVE GRADES TO STUDENTS ACCORDING TO THEIR SCORES

// let marks = prompt ("enter marks(0-100):");
// if(marks>=90 && marks<=100){
//     console.log(marks,"GRADE A");
// }else if (marks>=70 && marks<=89){
//     console.log(marks,"GRADE B");
// }else if (marks>=60 && marks<=69){
//     console.log(marks,"GRADE C");
// }else if (marks>=50 && marks<=59){
//     console.log(marks,"GRADE D");
// }else if (marks>=0 && marks<=49){
//     console.log(marks,"GRADE E");
// }else{
//     console.log("fail");
// }


// let marks = 93;
// let grade;
// if(marks>=90 && marks<=100){
//    grade = "A";
// }else if (marks>=70 && marks<=89){
//    grade = "B";
// }else if (marks>=60 && marks<=69){
//     grade = "C";
// }else if (marks>=50 && marks<=59){
//     grade = "D";
// }else if (marks>=0 && marks<=49){
//    grade = "F"; 
// }
// console.log("According to ur scores, your grade was:",grade);
