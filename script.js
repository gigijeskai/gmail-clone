fetch("https://dummyjson.com/quotes?&limit=100")
  .then((response) => response.json())
  .then((data) => {
    const author = data.quotes.map((quote) => quote.author);
    console.log(author);
    let nameEmail = document.getElementById("email-name");
    nameEmail = "";
    for (let index = 0; index < author.length; index++) {
      let singleAuthor = author;
      nameEmail.innerHTML += `<div class='emails'>
      <div id='left-part-email'>
      <div class='email-icons'><input type='checkbox'/>
      <i class='bi bi-star'>
      </i><i class='bi bi-caret-right'>
      </i></div><div class='email-name'>${singleAuthor}</div></div>
      <div class="email-object">Richiesta generica</div>
      <div class="email-date">11:11</div>
    </div>`;
    }
  })
  .catch((error) => console.error(error));
