const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector(".new"),
authorName = document.querySelector(".name"),
copyBtn = document.querySelector(".copy"),
fbBtn = document.querySelector(".facebook")

// Random Quotes
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random?minLength=100&maxLength=140")
    .then(response => response.json())
    .then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
        
});
}

// New Quote button
quoteBtn.addEventListener("click", randomQuote);

// Copy button
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
    copyBtn.classList.add("active");
    setTimeout(function(){
        copyBtn.classList.remove("active");
    },1000)
})

// Facebook button
fbBtn.addEventListener("click", ()=>{
    let fbUrl = `https://facebook.com/share.php=${quoteText.innerText}`;
    window.open(fbUrl, "_blank");
});

// Read more on Wikipedia