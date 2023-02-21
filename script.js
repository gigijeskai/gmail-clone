//   .then((response) => response.json())
//   .then((data) => {
//     const author = data.quotes.map((quote) => quote.author);
//     console.log(author);
//     let nameEmail = document.getElementById("email-name");
//     nameEmail = "";
//     for (let index = 0; index < author.length; index++) {
//       let singleAuthor = author;
//       nameEmail.innerHTML += `<p>${singleAuthor}</p>`;
//     }
//   })
//   .catch((error) => console.error(error));

async function showCite() {
  let httpQuotes = await fetch("https://dummyjson.com/quotes?&limit=100");

  let allQuotes = await httpQuotes.json();
  let arrayQuotes = allQuotes.quotes.map((quote) => quote.author);
  let emailBody = document.querySelector(".emails");
  emailBody.innerHTML = "";
  for (let i = 0; i < arrayQuotes.length; i++) {
    const quote = arrayQuotes[i];
    emailBody.innerHTML += `<div class="email">
    <div class="left-part-email">
      <div class="email-icons"><input type="checkbox" /><i class="bi bi-star"></i><i class="bi bi-caret-right"></i></div>
      <div class="email-name">${quote}</div>
    </div>
    <!-- chiusura #left-part-email -->
    <div class="email-object">Richiesta generica</div>
    <div class="email-date">11:11</div>
  </div>`;
  }
}
showCite();
