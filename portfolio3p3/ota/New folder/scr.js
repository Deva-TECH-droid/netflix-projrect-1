// // // // // // // // // // // // // // // // // const nums  = [1,2,3];
// // // // // // // // // // // // // // // // // const result = nums.map(x=> x * 2);
// // // // // // // // // // // // // // // // // console.log(result)

// // // // // // // // // // // // // // // // const a = [1,2,3];
// // // // // // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // // // // const {a: x= 10,b:y=20}=
// // // // // // // // // // // // // // // {  a: undefined, b:3};

// // // // // // // // // // // // // // // console.log(x,y);


// // // // // // // // // // // // // // const launda = {
// // // // // // // // // // // // // //   name : 'Devansh',
// // // // // // // // // // // // // //   greet() {
// // // // // // // // // // // // // //     console.log(`hello, ${this.name}`);
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // launda.greet();

// // // // // // // // // // // // // const person =  Object.seal({
// // // // // // // // // // // // //   name: 'Devansh',
// // // // // // // // // // // // //   age: 20
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // edit
// // // // // // // // // // // // // person.name = 'John'; // This will not change the name property

// // // // // // // // // // // // // // add
// // // // // // // // // // // // // person.city = 'New York'; // This will not add a new property

// // // // // // // // // // // // // // 
// // // // // // // // // // // // // // delete
// // // // // // // // // // // // // person.delete; // This will not delete the person object

// // // // // // // // // // // // // console.log(person); // Output: { name: 'Devansh', age: 20 }

// // // // // // // // // // // // //    SPRED OPERATOR

// // // // // // // // // // // // let obj = {a : 1, b: 2};
// // // // // // // // // // // // let copy = {...obj};
// // // // // // // // // // // // copy.a = 5;
// // // // // // // // // // // // console.log(obj.a); // Output: { a: 5, b: 2 }


// // // // // // // // // // // const users = [
// // // // // // // // // // //   {
    
// // // // // // // // // // //     name: 'John',
// // // // // // // // // // //     addrees:{
// // // // // // // // // // //       city: 'New York',
// // // // // // // // // // //       zip: 10001
// // // // // // // // // // //     }
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     name: 'Jane',
// // // // // // // // // // //     addrees:null
// // // // // // // // // // //     }
  
// // // // // // // // // // // ];  

// // // // // // // // // // // users.forEach(user => console.log(user?.addrees?.city));


// // // // // // // // // // function add(x, y) {
// // // // // // // // // //   return x + y;
// // // // // // // // // // }
// // // // // // // // // // function multiply(x, y) {
// // // // // // // // // //   return x * y;
// // // // // // // // // // }
// // // // // // // // // // function higherOrderFunction(fn, x, y) {
// // // // // // // // // //   return fn(x, y);
// // // // // // // // // // }
// // // // // // // // // // console.log(higherOrderFunction(add, 5, 3)); // Output: 8
// // // // // // // // // // console.log(higherOrderFunction(multiply, 5, 3)); // Output: 15

// // // // // // // // // const String1 = "KOLBO LORBO JEETBORE";
// // // // // // // // // const String2 = "JEETBORE KOLB LORBO";

// // // // // // // // // function isAnagram(str1, str2) {
 
// // // // // // // // //   return str1.split("").sort().join("") === str2.split("").sort().join("");
 
// // // // // // // // // }

// // // // // // // // // console.log(isAnagram(String1, String2)); // Output: true
// // // // // // // // // function OTP() {
// // // // // // // // //     let otp = Math.floor(Math.random() * 9000);
// // // // // // // // //     return otp;
// // // // // // // // // }

// // // // // // // // // console.log("Your OTP is:", OTP());


// // // // // // // // const obj = {
// // // // // // // //     lib:'react',
// // // // // // // //     showName: function() {
// // // // // // // //         console.log(this.lib);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // obj.showName = 
// // // // // // // // obj.showName.bind(obj);
// // // // // // // // obj.showName();
// // // // // // // // setTimeout(obj.showName, 1000);

// // // // // // // const str = "kolbo lorbo jeetbore";
// // // // // // // const vowels = ['a', 'e', 'i', 'o', 'u'];

// // // // // // // function countVowels(data){
// // // // // // //     let  count = 0;

// // // // // // //     data.toLowereCase().split("").forEach((char) => {
// // // // // // //         if(vowels.includes(char)){
// // // // // // //             count++;
// // // // // // //         }
// // // // // // //     })
// // // // // // // }


// // // // // // const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

// // // // // function sum(a, b) {
// // // // //     return a + b;
// // // // // }
// // // // // const num1 = 10;
// // // // // const num2 = 20;
// // // // // const result = sum(num1, num2);
// // // // // console.log("The sum of", num1, "and", num2, "is", result);
// // // //  function sum(a,b){
// // // //     return a+b;
// // // //  }
// // // //  const num1 = 10;
// // // //  const num2 = 40;

// // // //  const result = sum(num1 , num2);

// // // //  console.log("THe sum of" , num1 , " and " , num2 , " is " , result);



// // // function reverseString(str){
// // //     let reversed = " ";
// // //     for(let  i = str.length - 1; i >= 0; i--){
// // //         reversed += str[i];
// // //     }
// // //     return reversed;
// // // }
// // // const inputString = "kolbo lorbo jeetbore";
// // // const reversedString =  reverseString(inputString);
// // // console.log("Reversed string:", reversedString);

// // function findMax(arr){
// //     if(arr.length === 0){
// //         return null;
// //     }
// //     let max = arr[0];
// //     for(let i = 1; i < arr.length; i++){
// //             if(arr[i] > max){
// //                 max = arr[i];
// //             }
// //         }
// //         return max;
// // }

// // const Numbers = [34,67,89,76,43,22];
// // const maxNumber = findMax(Numbers);
// // console.log("The maximum number is:", maxNumber);

// function factorial  (n){
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }
// }

// const number = 10;
// const result  = factorial(number); 
// console.log("The factorial of", number, "is", result);


