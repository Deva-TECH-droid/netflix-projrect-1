let btn = document.querySelector('#btn')
let content = document.querySelector('#content')

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}
window.addEventListener('load', () => {
    speak("Welcome to Virtual Assistant");
    wishMe();
});

let speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    content.innerHTML = transcript;
    takeCommand(transcript);
}
btn.addEventListener('click', () => {
    recognition.start();
    speak("Listening...");
});
function takeCommand(command) {
    command = command.toLowerCase();
    if (command.includes("hello")) {
        speak("Hello, how can I assist you?");
    }
    else if (command.includes("who are you")) {
        speak("I am your virtual assistant, created by Devansh Upadhyay sir");
    } else if (command.includes("open youtube")) {
        speak("opening YouTube");
        window.open("https://www.youtube.com");
    } else if (command.includes("open google")) {
        speak("opening Google");
        window.open("https://www.google.com");
    } else if (command.includes("open vscode")) {
        speak("opening Visual Studio Code");
        window.open("https://code.visualstudio.com");
    } else if (command.includes("open GITHub")) {
        speak("opening GitHub");
        window.open("https://github.com");
    } else if (command.includes("open linkedin")) {
        speak("opening LinkedIn");
        window.open("https://www.linkedin.com");
    } else if (command.includes("open instagram")) {
        speak("opening Instagram");
        window.open("https://www.instagram.com");
    } else if (command.includes("open leet's code")) {
        speak("opening leet's code");
        window.open("https://leetcode.com");
    } else if (command.includes("open calculator")) {
        speak("opening calculator");
        window.open("calculator://");
    } else if (command.includes("time")) {
        let time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (command.includes("date")) {
        let date = new Date().toLocaleDateString();
        speak(`Today's date is ${date}`);
    } else if (command.includes("weather")) {
        speak("Please check your weather application for the latest updates.");
    } else if (command.includes("bye")) {
        speak("Goodbye! Have a great day!");
     } else {
        speak(`this is what bi found on internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }
}