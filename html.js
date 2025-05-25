let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
   document.querySelector(".box").innerHTML = "hello bhai kya haal";
});
button.addEventListener("contextmenu", () => {
   alert("teri maa ki jai ho bahi mere")
});
