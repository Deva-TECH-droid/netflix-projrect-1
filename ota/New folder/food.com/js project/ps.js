// // // // // // // // // // // // // // // // // // // // // // // document.getElementById("harry").addEventListener("click", function(){
// // // // // // // // // // // // // // // // // // // // // // //     window.location = "https://codewithharry.com";
// // // // // // // // // // // // // // // // // // // // // // //     window.focus();
// // // // // // // // // // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // // // // // // // // // document.getElementById("google").addEventListener("click", function(){
// // // // // // // // // // // // // // // // // // // // // // //     window.location = "https://google.com";
// // // // // // // // // // // // // // // // // // // // // // //     window.focus();
// // // // // // // // // // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // // // // // // // // // document.getElementById("youtube").addEventListener("click", function(){
// // // // // // // // // // // // // // // // // // // // // // //     window.location = "https://youtube.com";
// // // // // // // // // // // // // // // // // // // // // // //     window.focus();
// // // // // // // // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // // // // // setInterval(async function(){
// // // // // // // // // // // // // // // // // // // // // //     document.querySelector("#bulb").classList.toggle("bulb")
// // // // // // // // // // // // // // // // // // // // // // }, 3

// // // // // // // // // // // // // // // // // // // // // let age  = 16;
// // // // // // // // // // // // // // // // // // // // // if(age >= 10 && age <= 20){
// // // // // // // // // // // // // // // // // // // // //     // console.log("the age is between 10 to 20")
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // // // // // // // //     console.log("the age is not in betwen 10 to 20")
// // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // let number = 18;
// // // // // // // // // // // // // // // // // // // // if(number % 2 === 0 && number % 3 === 0){
// // // // // // // // // // // // // // // // // // // //     console.log("this number is divisible by 2 and 3")
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // // // // // // //     console.log("it not")
// // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // let age = 20;

// // // // // // // // // // // // // // // // // // // let message = (age >= 18) ? "you can drive" : "you cannoyt drive";

// // // // // // // // // // // // // // // // // // // console.log(message)

// // // // // // // // // // // // // // // // // // let obj = {
// // // // // // // // // // // // // // // // // //     devansh : 80,
// // // // // // // // // // // // // // // // // //     bhuvi : 90,
// // // // // // // // // // // // // // // // // //     abhi : 56
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // let keys  = Object.keys(obj);
// // // // // // // // // // // // // // // // // // // for(let i = 0; i <keys.length; i++){
// // // // // // // // // // // // // // // // // // //     console.log(keys[i] + " got " + obj[keys[i]]);
// // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // for(let keys in obj){
// // // // // // // // // // // // // // // // // //     console.log(keys + " got " + obj[keys]);
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // let correctNumber = 7;


// // // // // // // // // // // // // // // // // do{
// // // // // // // // // // // // // // // // //    let guess = prompt("enter a number:");
// // // // // // // // // // // // // // // // //     if(parseInt(guess) !== correctNumber){
// // // // // // // // // // // // // // // // //         console.log(" Try Again");
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // while(parseInt(guess) !== correctNumber);
// // // // // // // // // // // // // // // // // console.log("correct number guessed by you:")



// // // // // // // // // // // // // // // // function findMeaan(a,b,c,d,e){
// // // // // // // // // // // // // // // //     return(a + b + c + d + e) / 5;
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // console.log("Mean is...." + findMeaan(10 , 20 , 30 , 40 , 50));

// // // // // // // // // // // // // // // const sentence = "chandu ke chacha ne chandu ki chachi ko chandi ke chamach se chataney chatayi";

// // // // // // // // // // // // // // // console.log(sentence.includes("chataney"));
// // // // // // // // // // // // // // // console.log(sentence.startsWith("mandu"));
// // // // // // // // // // // // // // // console.log(sentence.endsWith("chatayi"));


// // // // // // // // // // // // // // let str = "please give me Rs 1000";


// // // // // // // // // // // // // // let amount  = str.match(/\d+/)[0]

// // // // // // // // // // // // // // console.log(amount)
// // // // // // // // // // // // // let str  = "KolKata";

// // // // // // // // // // // // // str[3] = 'k';
// // // // // // // // // // // // // console.log(str)

// // // // // // // // // // // // const sentence = "chandu ke chacha ne chandu ki chachi ko chandi ke chamach se chataney chatayi";

// // // // // // // // // // // // const word = "fox" ;

// // // // // // // // // // // // console.log(sentence.includes(word))
// // // // // // // // // // // // console.log(`the word "${word}" ${sentence.includes(word) ?  'is': 'is not'} in the sentence`)

// // // // // // // // // // // // synchronus programing

// // // // // // // // // // // // let a  = prompt("what is your name")
// // // // // // // // // // // // let b = prompt("what is your age")
// // // // // // // // // // // // let c = prompt("who is your favourit cricket palyer")

// // // // // // // // // // // // console.log(a + " is" + b + " years old and " + c + "is his favourot palyer")

// // // // // // // // // // // let a = prompt("What is your name?");
// // // // // // // // // // // let b = prompt("What is your age?");
// // // // // // // // // // // let c = prompt("Who is your favorite cricket player?");

// // // // // // // // // // // console.log(a + " is " + b + " years old and " + c + " is their favorite player.");


// // // // // // // // // // console.log("start")
// // // // // // // // // // setTimeout(function(){
// // // // // // // // // //     console.log("juice pila do")
// // // // // // // // // // } , 1000);
// // // // // // // // // // setTimeout(function(){
// // // // // // // // // //     console.log("mosambi ka")
// // // // // // // // // // }, 2000);
// // // // // // // // // // setTimeout(function(){
// // // // // // // // // //     console.log("mood off hai mera")
// // // // // // // // // // }, 3000)
// // // // // // // // // // console.log("end")

// // // // // // // // // // callbacks
// // // // // // // // // function loadScript(src , callbacks) {
// // // // // // // // //     var script = document.createElement("script");
// // // // // // // // //     script.src = src;
// // // // // // // // //     script.onload = function(){
// // // // // // // // //         console.log("loaded scrpt with src " + src)
// // // // // // // // //         callback(null , src);
// // // // // // // // //     }

// // // // // // // // //     script.onerror = function(){
// // // // // // // // //         console.log("loaded scrpt with src " + src)
// // // // // // // // //         callback(new Error("src got some error"))
// // // // // // // // //     }
// // // // // // // // //     document.body.appendChild(script);
// // // // // // // // // } 
// // // // // // // // // function hello(error , src){
// // // // // // // // //     if(error){
// // // // // // // // //         console.log(error)
// // // // // // // // //         return;
// // // // // // // // //     }
// // // // // // // // //     alert('hello world' + src);
// // // // // // // // // }


// // // // // // // // let promise = new promise(function(resolve , reject){
// // // // // // // //     alert("hello");
// // // // // // // //     resolve(56)
// // // // // // // // })

// // // // // // // // console.log("hello one");
// // // // // // // // setTimeout(function(){
// // // // // // // //     console.log("hello two in 2 seconds");
// // // // // // // // }, 2000)

// // // // // // // // console.log("my name is" + "hello three"); 
// // // // // // // // console.log(promise)


// // // // // // // let  p = new promise ((resolve , reject) => {
// // // // // // //     console.log("promise is panding")
// // // // // // //     setTimeout(() => {
// // // // // // //         console.log("i am a promise and i am rejected")

// // // // // // //         reject(new Error("I am an error"))
// // // // // // //     } , 5000)
// // // // // // // })

// // // // // // // console.log(p)



// // // // // // let p1 = new Promise((resolve , reject) => {
// // // // // //     setTimeout(() => {
// // // // // //         console.log("resolve after 2 seconds")
// // // // // //         resolve(56)
// // // // // //     } , 2000)
// // // // // // })

// // // // // // p1.then((value) =>{
// // // // // //     console.log(value)
// // // // // //     let p2 = new Promise((resolve , reject) =>{
// // // // // //        setTimeout(() =>{resolve("promise 2")} , 2000) 
// // // // // //     })
// // // // // //     return p2
// // // // // // })
// // // // // //  .then((value)=>{
// // // // // //     console.log("we are done")
// // // // // //  })

// // // // // const loadScript = (src) => {
// // // // //     return new Promise(resolve =>{
// // // // //         let script = document.createElement("script")
// // // // //         script.type = "text/javaScript"
// // // // //         script.src = src
// // // // //         document.body.appendChild(script)
// // // // //         script.onload = ()=>{
// // // // //             resolve(1)
// // // // //         }
// // // // //         script.onerror = ()=>{reject(0)}
// // // // //     })
// // // // // }

// // // // // let p1  = loadScript("")


// // // // // let numbers = [];
// // // // // let input;

// // // // // while(true) {
// // // // //     input = prompt("enter a number(or type'stop' to finish):")
// // // // //     if(input.toLowerCase() === "stop")
// // // // //     break;
// // // // // numbers.push(Number(input))
// // // // // }
// // // // // console.log("Array of numbers:" , numbers)

// // // // let numbers = [];
// // // // let input;

// // // // while (true) {
// // // //     input = prompt("Enter a number (or type 'stop' to finish):");
    
// // // //     if (input.toLowerCase() === "stop") {
// // // //         break;
// // // //     }

// // // //     let num = Number(input);
// // // //     if (!isNaN(num)) {
// // // //         numbers.push(num);
// // // //     } else {
// // // //         console.log("Invalid number, try again.");
// // // //     }
// // // // }

// // // // console.log("Array of numbers:", numbers);


// // // // let nums = [];
// // // // let num;

// // // // do{
// // // //     num = Number(prompt("enter a number(0 to stop):"));
// // // //     nums.push(num);
// // // // }while(num!==0);

// // // // console.log("Final array", nums);

// // // let nums = [10, 23, 50, 40, 17, 100, 7];  // sample array

// // // let filtered = nums.filter(n => n % 10 === 0);

// // // console.log("Numbers divisible by 10:", filtered);



// // let nums = [10, 23, 50, 40, 17, 100, 7];  // sample array

// // let square = nums.map(n => n * n);

// // console.log("original numbers:", nums);
// // console.log("squares:", square);

// let n = Number(prompt("enter a number to calculate its factorial:"))
  
// let naturalNumbers = Array.from({length: n} , (_,i) => i + 1);

// let factorial = naturalNumbers.reduce((acc, val) => acc * val,1);

// console.log(`the factorial of $ {n} is`, factori

