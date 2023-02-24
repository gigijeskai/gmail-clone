//   make email body
async function showAuthor() {
  let httpQuotes = await fetch("https://dummyjson.com/quotes?&limit=100");
  let httpPosts = await fetch("https://dummyjson.com/posts?&limit=100");

  let allPosts = await httpPosts.json();
  let arrayPost = allPosts.posts.map((post) => post.title);

  let allQuotes = await httpQuotes.json();
  let arrayAuthor = allQuotes.quotes.map((quote) => quote.author);
  let arrayQuotes = allQuotes.quotes.map((quote) => quote.quote);
  let emailBody = document.querySelector(".emails");
  emailBody.innerHTML = "";
  for (let i = 0; i < arrayAuthor.length; i++) {
    const author = arrayAuthor[i];
    const quote = arrayQuotes[i];
    const post = arrayPost[i];

    // random hour function
    randomTime = () => {
      hrs = Math.round(Math.random() * 24);
      mins = Math.round(Math.random() * 60);
      let hFormat = hrs < 10 ? "0" : "";
      let mFormat = mins < 10 ? "0" : "";
      let amPm = hrs < 12 ? "AM" : "PM";
      let is12 = hrs % 12 === 0;

      return amPm === "AM" && !is12
        ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
        : "AM" && is12
        ? String(12 + ":" + mFormat + mins + " " + amPm)
        : is12
        ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
        : String(hFormat + (hrs - 12) + ":" + mFormat + mins + " " + amPm);
    };

    let resultTime = this.randomTime();

    emailBody.innerHTML += `<div class="email">
    <div class="left-part-email">
      <div class="email-icons"><input type="checkbox" /><i class="bi bi-star"></i><i class="bi bi-caret-right"></i></div>
      <div class="email-name bold">${author}</div>
    </div>
    <!-- chiusura #left-part-email -->
    <div class="email-object"><span class='bold'>${post} </span>   -   ${quote}</div>
    <div class="email-date">${resultTime}</div>
  </div>`;
  }
}

window.onload = () => {
  // searchbar
  let filter = document.getElementById("filter");
  let emailList = document.querySelector(".emails");
  filter.addEventListener("keyup", filterItems);
  let toggleMenu = document.getElementById("hamburger-menu");
  let contentAside = document.getElementById("aside-container");
  let isContentHidden = false;
  toggleMenu.addEventListener("click", function () {
    if (isContentHidden) {
      contentAside.style.display = "block";
      isContentHidden = false;
      let icons = contentAside.querySelectorAll("#aside-container i");
      for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "none";
      }
    } else {
      contentAside.style.display = "none";
      isContentHidden = true;
      let icons = contentAside.querySelectorAll("#aside-container i");
      for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "block";
      }
    }
  });

  function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let emails = emailList.children;
    Array.from(emails).forEach(function (email) {
      let emailName = email.querySelector("div").textContent;
      if (emailName.toLowerCase().indexOf(text) != -1) {
        email.style.display = "flex";
      } else {
        email.style.display = "none";
      }
    });
  }

  //   make email body
  showAuthor();
};
