const catList = document.getElementsByClassName("list");
const cat = document.getElementsByClassName("cats");

for (let i = 0; i < cat.length; i++) {
    let click = 0;
    cat[i].innerHTML = `
                                    <h1 class="mui--text-display1">${cat[i].id}</h1>
                                    <h2>You've clicked on ${cat[i].id} <span class="click">${click}</span> times!</h2>`;

    cat[i].style.background = `url(./img/cat${i}.jpg)`;
    cat[i].style.backgroundSize = `cover`;
    cat[i].style.backgroundRepeat = `no-repeat`;

    const li = document.createElement("li");
    catList[0].appendChild(li);

    // const catImage = document.getElementsByTagName("img");
    const clickTimes = document.getElementsByClassName("click");
    const listName = document.getElementsByTagName("li");
    const buttonName = document.getElementsByClassName("cat-btn");

    listName[
        i
    ].innerHTML = `<button class="mui-btn mui-btn--primary cat-btn">${cat[i].id}</button>`;

    function addClickEventToElement(element) {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            click++;
            clickTimes[i].textContent = `${click}`;
        });
    }

    addClickEventToElement(cat[i]);
    addClickEventToElement(buttonName[i]);
}
