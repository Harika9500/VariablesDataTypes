/*console.log("welcome to apna college date 1/3/2025");
console.log("welcome to harika learning");
alert("harika");
console.log("i love javascript");

fullName = "Tony Stark";
console.log("fullName");..output will be as fullName bcuz we hv given the name in tony strak in double quotes*/

/*VARIABLES

fullName = "Tony Stark";
age = 24;
price = 150;
x = null;
y = undefined; (null nd undefined difference)
isFollow = false;//boolean
console.log(isFollow);

js is a dynamically typed language
.....................*/

/*Variables (RULES)1. they are case sensitive ..a nd A are diff
Example:
fullname = "harika";
fullName = "deepa";
console.log(fullname);
console.log(fullName);
 
2.only letters, digits, underscore nd $ is allowed (not even a space)
Example: fullname_, fullanem$, fullanem123

3.only a letter, underscore, or $ should be 1st letter
_fullName, fullName, $fullName

4. reserved words cannot be variable names
 example:  fixed words like console, we cant use console word as variable ...u can check it ini mdn web docs*/

 /*let const variable
 var can be re declared nd updated , global scope variable
 let cannot be redeclared but can be updated , block scope variable
 const cnnot be redeclared not updated, block scope variable*/

 /*data types...priimitive nd non primitive,,,..null undefined number string boolean bigInt symbol
  let x = BigInt("123");
  let y = Symbol("Hello");
non primitive ...objects(Collectipn of different variables) nd arrays */
//OBJECTS
/*const student = {
      fullName : "Harika",
      age      : 26 ,
      cgpa     : 9.5,
      isPass   : true,
};
student["age"]  = student["age"] + 1;
student["fullName"] = "Deepa",
console.log(student["age"]);
console.log(student.age);
console.log(student.fullName);
console.log(student);

typeof student...object
there are two ways to access a key in an object one is obj.key other is obj["key"]
student["fullName"]...Harika*/

/*const product = {
      name : "pen",
      rating : 4 ,
      offer : 5,
      isDeal : true,
      price : 270,   
};
console.log(product);
console.log(product.rating);
console.log(product["offer"]);

typeof product....object*/


const profile = {
     userName : "@Harika",
     followers : 123,
     following : 145,
     isFollow : true,
     posts : 34,
     detaisInformation : "JS developer",
};
console.log(profile.followers);
console.log(profile["isFollow"]);
console.log(profile);
console.log(typeof profile.isFollow);
console.log(typeof profile)
console.log(typeof profile["isFollow"]);