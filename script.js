const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector(".new"),
authorName = document.querySelector(".name"),
copyBtn = document.querySelector(".copy"),
fbBtn = document.querySelector(".facebook")
const wikiBtn = document.querySelector(".read")

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

        const button = document.querySelector('.read');

})}   

// New Quote button
if (quoteBtn){
quoteBtn.addEventListener("click", randomQuote);
}

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
        
wikiBtn.addEventListener('click', () => {
  fetch("https://api.quotable.io/random?minLength=100&maxLength=140")
    .then(response => response.json())
    .then(result => {
      let authorName = document.querySelector(".name")
      let searchUrl = "https://wikipedia.org/wiki/" + (authorName.innerText);
      window.open(searchUrl, '_blank');
    })
    .catch(error => console.error(error));
}); 