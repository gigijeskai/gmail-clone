async function showAuthor() {
  let httpQuotes = await fetch("https://dummyjson.com/quotes?&limit=100");
  let allQuotes = await httpQuotes.json();
  let arrayAuthor = allQuotes.quotes.map((quote) => quote.author);
  let arrayQuotes = allQuotes.quotes.map((quote) => quote.quote);
  let emailBody = document.querySelector(".emails");
  emailBody.innerHTML = "";
  for (let i = 0; i < arrayAuthor.length; i++) {
    const author = arrayAuthor[i];
    const quote = arrayQuotes[i];
    emailBody.innerHTML += `<div class="email">
    <div class="left-part-email">
      <div class="email-icons"><input type="checkbox" /><i class="bi bi-star"></i><i class="bi bi-caret-right"></i></div>
      <div class="email-name">${author}</div>
    </div>
    <!-- chiusura #left-part-email -->
    <div class="email-object">${quote}</div>
    <div class="email-date">11:11</div>
  </div>`;
  }
}
showAuthor();
