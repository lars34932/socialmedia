let postSection = document.getElementById("js--post__section");
let currentPage = 0;

function makePost(profileImg, postUsername, postTime, postText, post, number1, number2, number3, number4) {
    //article self
    let article = document.createElement("article");
    appendClass(article, "post");

    //header
    let header = document.createElement("div");
    appendClass(header, "post__header");

    let headerImg = document.createElement("img");
    appendClass(headerImg, "header__img");
    headerImg.src = profileImg;
    
    let headerDiv = document.createElement("div");

    let headerDiv2 = document.createElement("div");
    appendClass(headerDiv2, "post__header");

    let username = document.createElement("p");
    appendClass(username, "username");
    username.innerText = postUsername;

    let time = document.createElement("p");
    appendClass(time, "time");
    time.innerText = postTime;
    
    let headerDiv3 = document.createElement("div");

    let text = document.createElement("p");
    appendClass(text, "post__text");
    text.innerText = postText;


    //post
    let img = document.createElement("img");
    appendClass(img, "post__img");
    img.src = post;


    //reactions
    let reactionDiv = document.createElement("div");
    appendClass(reactionDiv, "post__reactions");


    //reaction 1
    let reactionDiv2 = document.createElement("div");
    appendClass(reactionDiv2, "reaction__comment");
    appendClass(reactionDiv2, "reaction__div");

    let reaction = document.createElement("i");
    appendClass(reaction, "fa-regular");
    appendClass(reaction, "fa-comment");
    appendClass(reaction, "reaction__icon");

    let reactionText = document.createElement("p");
    appendClass(reactionText, "reaction__number");
    reactionText.innerText = number1;


    //reaction 2
    let reactionDiv3 = document.createElement("div");
    appendClass(reactionDiv3, "reaction__repost");
    appendClass(reactionDiv3, "reaction__div");

    let reaction2 = document.createElement("i");
    appendClass(reaction2, "fa-solid");
    appendClass(reaction2, "fa-arrow-rotate-left");
    appendClass(reaction2, "reaction__icon");

    let reactionText2 = document.createElement("p");
    appendClass(reactionText2, "reaction__number");
    reactionText2.innerText = number2;

    //reaction 3
    let reactionDiv4 = document.createElement("div");
    appendClass(reactionDiv4, "reaction__like");
    appendClass(reactionDiv4, "reaction__div");

    let reaction3 = document.createElement("i");
    appendClass(reaction3, "fa-regular");
    appendClass(reaction3, "fa-heart");
    appendClass(reaction3, "reaction__icon");

    let reactionText3 = document.createElement("p");
    appendClass(reactionText3, "reaction__number");
    reactionText3.innerText = number3;

    //reaction 4
    let reactionDiv5 = document.createElement("div");
    appendClass(reactionDiv5, "reaction__views");
    appendClass(reactionDiv5, "reaction__div");

    let reaction4 = document.createElement("i");
    appendClass(reaction4, "fa-regular");
    appendClass(reaction4, "fa-eye");
    appendClass(reaction4, "reaction__icon");

    let reactionText4 = document.createElement("p");
    appendClass(reactionText4, "reaction__number");
    reactionText4.innerText = number4;

    //reaction 5
    let reactionDiv6 = document.createElement("div");
    appendClass(reactionDiv6, "reaction__save");
    appendClass(reactionDiv6, "reaction__div");

    let reaction5 = document.createElement("i");
    appendClass(reaction5, "fa-regular");
    appendClass(reaction5, "fa-bookmark");
    appendClass(reaction5, "reaction__icon");

    postSection.append(article);

    article.append(header);
    article.append(img);
    article.append(reactionDiv);

    header.append(headerImg);
    header.append(headerDiv);

    headerDiv.append(headerDiv2);
    headerDiv.append(headerDiv3);

    headerDiv2.append(username);
    headerDiv2.append(time);

    headerDiv3.append(text);

    reactionDiv.append(reactionDiv2);
    reactionDiv.append(reactionDiv3);
    reactionDiv.append(reactionDiv4);
    reactionDiv.append(reactionDiv5);
    reactionDiv.append(reactionDiv6);

    reactionDiv2.append(reaction);
    reactionDiv2.append(reactionText);

    reactionDiv3.append(reaction2);
    reactionDiv3.append(reactionText2);

    reactionDiv4.append(reaction3);
    reactionDiv4.append(reactionText3);

    reactionDiv5.append(reaction4);
    reactionDiv5.append(reactionText4);

    reactionDiv6.append(reaction5);
}

function appendClass(element, className) {
    element.classList.add(className);
}

function randomNumber() {
    let number = Math.floor(Math.random() * 999);
    let arrayRandom = Math.floor(Math.random() * 3);
    let array = ['', 'K', 'M'];

    return number + array[arrayRandom];
}

async function loadData(page) {
    const response = await fetch('assets/json/data.json');
    const data = await response.json();
    let start = page * 21;
    let end = start + 21;
    for (let i = start; i < end && i < data.length; i++) {
        makePost(data[i].profile, data[i].username, data[i].time, data[i].text, data[i].post, randomNumber(), randomNumber(), randomNumber(), randomNumber());
    }
}

function loadNextPage() {
    currentPage++;
    loadData(currentPage);
}

function isScrollingToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
}

window.addEventListener('scroll', function() {
    if (isScrollingToBottom()) {
        loadNextPage();
    }
});

loadNextPage();