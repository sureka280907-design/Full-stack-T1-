// var a = 10;
// //var b = 20;
// const c = 30;

// var a;
// a = 10;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=34;
// var str="Hello";
// var undefined;
// var Null=null;
// var boolean=true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefined);
// console.log(typeof Null);
// console.log(typeof boolean);

// var bigInt=123n;
// var symbol=Symbol('li');


// console.log(typeof bigInt); //"bigint"
// console.log(typeof symbol); //"symbol"

// //var arr = [10,20,30,40];
// console.log(typeof arr);
// var obj={
//     name:"Sureka",
//     dept:["CT"]
// }
// // Arithmetic Operators (+,-,*,/,%,**)
// var a = 10;
// var b = "Sure";

// console.log(a+b); 
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //Logical Operator (&&, ||, !)

// //                  &&  ||
// // true   true   true   true
// // true   false  false  true
// //false   true   false  true
// //false   false  false  false


// var a = true;
// var b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a);

 //relational operators (>,<,>=,<=,==,===,!=,!==)

// a = 10;
// b = 20;

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

//Assingment operator (=,+=,-=.%=,*=,/=,**=)


// Unary operator(--,++)

// var a = 10; //11

// console.log(a--);
// console.log(--a);

a=1; //2
b=1; //0
c=0; //1
          

// console.log(result)
//conditional statement
//var a=10;
// var b=20;
// //if condition
//             if(true) {
//                 //Template Literals
//             console.log('${a} + ${b} = ${a+b}')
// }

// if(true) {
//     a=10;
//     console.log(a);
// }
// var a; //Hoisting
// console.log(a);
// var a=10;

// var a=10; //global scope
// // let b=20; //block scope
// const b=20; // block scope
// if(true) {
//     console.log(a);
//     // let const b=30; //block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a=10;
// if(a%2==0){
//     console.log('${a} is Even');
// }
// else{
//     console.log('${a} is odd');
// }

// var mark=90;

// if(mark>=90){
//     console.log("O grade");
// }
// else if(mark>=70){
//     console.log("A grade");
// }
// else if(mark>=35){
//     console.log("Pass");
// }
// else {
//     console.log("Fail");
// }

// var a=10;
// //condition?true statement:false statement;
// var result = a%2==0?"Even":"Odd";
// console.log(result) 

// mark=30;
// var result= (mark>=90)?"O grade":
//              (mark>=70)?"A grade":
//              (mark>=35)?"Pass":
//              "Fail";
//              console.log(result);

// var day=2;
// switch(day) {
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Tuesday");
//         break;
//     }
//     case 3:{
//         console.log("Wednesday");
//         break;
//     }
//     case 4:{
//         console.log("Thursday");
//         break;
//     }
//     case 5:{
//         console.log("Friday");
//         break;
//     }
//     case 6:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid input");
//     }
// }

//Looping statements

// 1 time 11 times 10 times
// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// var val=10246;
// var count=0;
// while(val>0){
//     count++;
//     val=Math.floor(val/10);
// }
// console.log(count);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//     continue;
// }
// console.log(i);
// } 

// function add(a=5,b=6){
//     console.log(a+b);
// }

// add();

// var demo=(a=5,b=6) =>{
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

// var arr=[10,20,30];
// var arr2=[...arr,40,50];
// console.log(arr);
// console.log(arr2);

// var[m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);

var{name,mobile,dept,email,isActive} = {
    name:"Sureka",
    mobile:9876543210,
    dept:["CT"],
    email:"sr@gmail.com",
    isActive:true
}
console.log(name,mobile,dept,email,isActive)


    