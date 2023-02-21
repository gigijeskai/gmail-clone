async function showCite() {
  let httpQuotes = await fetch("https://dummyjson.com/quotes?&limit=100");
  let allQuotes = await httpQuotes.json();
  let arrayAuthor = allQuotes.quotes.map((quote) => quote.author);
  let emailBody = document.querySelector(".emails");
  emailBody.innerHTML = "";
  for (let i = 0; i < arrayAuthor.length; i++) {
    const author = arrayAuthor[i];
    emailBody.innerHTML += `<div class="email">
    <div class="left-part-email">
      <div class="email-icons"><input type="checkbox" /><i class="bi bi-star"></i><i class="bi bi-caret-right"></i></div>
      <div class="email-name">${author}</div>
    </div>
    <!-- chiusura #left-part-email -->
    <div class="email-object">Richiesta generica</div>
    <div class="email-date">11:11</div>
  </div>`;
  }
}
showCite();
