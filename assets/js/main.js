// Open internet 
const windoW = document.querySelector(".window");
const internet = document.querySelector(".internet");
const closeWindow = document.querySelector(".close");
const internetTab = document.querySelector(".internettab");


internet.addEventListener("dblclick", function () {
    windoW.style.display = "block";
    internetTab.style.display = "flex";
})

closeWindow.addEventListener("click", function () {
    windoW.style.display = "none";
    internetTab.style.display = "none";
})
//============

// Data
const time = document.querySelector(".time p");
let d = new Date();
time.textContent = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
//============

// Search siper
const searchSite = document.querySelector(".loading form");
const input = document.querySelector(".loading form input");
const google = document.querySelector(".google");
const anime = document.querySelector(".anime");

searchSite.addEventListener("submit", function (e) {
    if (input.value === "google.com" || input.value === "wwww.google.com" || input.value === "http://www.google.com" || input.value === "https://www.google.com") {
        anime.style.animation = "load 3s";
        setTimeout(function () {
            google.style.display = "flex";
        }, 3000)
    } else {
        document.write("please eadaasd")
    }
    e.preventDefault();
});
//============

// Search ne google
const searchGoogle = document.querySelector(".entry form");
const inputGoogle = document.querySelector(".entry form input");
const output = document.querySelector(".searchiddone");
const googleSearch = document.querySelector(".googleSearch");


searchGoogle.addEventListener("submit", function (e) {
    output.value = inputGoogle.value;
    google.style.display = "none";
    anime.style.animation = "load 3s";
    googleSearch.style.display = "block"


    // Did u mean 
    let didumean = document.querySelector(".didUmean")
    if (inputGoogle.value !== "itshqip") {
        ;
        didumean.style.display = "block"
    } else {
        didumean.style.display = "none"
    }
    e.preventDefault();
});



// Itshqip
const klikosearchgoogle = document.querySelector(".res");
const linkredict = document.querySelector(".res a");
const itshqip = document.querySelector(".itshqip"); // Gjitha 
const mainpage = document.querySelector(".filler"); //front page
const post = document.querySelector(".temaHTML"); //posti
const likupost = document.querySelector(".teamt li"); // kliko per me te qu ke posti
mainpage.style.display = "none";
post.style.display = "none";

linkredict.addEventListener("click", function (e) {
    mainpage.style.display = "block";
    itshqip.style.display = "block";
    googleSearch.style.display = "none";
    e.preventDefault();
})


likupost.addEventListener("click", function () {
    itshqip.style.display = "none";
    post.style.display = "block";
})

const comments = document.querySelector(".shtonjecomment");
const komento = document.querySelector(".komento");
const komenti = document.createElement("h4");
const emri = document.createElement("h3");
const emriinput = document.querySelector(".emriinput");
const komentiinput = document.querySelector(".komentiinput");
comments.appendChild(emri);
comments.appendChild(komenti);


komento.addEventListener("submit",function(e){
    emri.appendChild(document.createTextNode(emriinput.value));
    komenti.appendChild(document.createTextNode(komentiinput.value));
    e.preventDefault();
})