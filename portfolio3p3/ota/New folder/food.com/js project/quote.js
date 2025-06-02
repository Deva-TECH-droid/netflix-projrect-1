const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://type.fit/api/quotes";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);