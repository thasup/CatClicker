const catList = document.getElementsByClassName("list");
const cat = document.getElementsByClassName("cats");
for (let i = 0; i < cat.length; i++) {
    console.log(cat);
    cat[i].innerHTML = `<img src="./img/cat${i}.jpg" alt="cat" />`;

    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const li = document.createElement("li");
    cat[i].appendChild(h2);
    cat[i].appendChild(h3);
    catList[0].appendChild(li);

    let click = 0;
    const catName = document.getElementsByTagName("h2");
    const catImage = document.getElementsByTagName("img");
    const clickTimes = document.getElementsByTagName("h3");
    const listName = document.getElementsByTagName("li");

    catName[i].textContent = `Cat Name : ${cat[i].id}`;
    clickTimes[
        i
    ].textContent = `You clicked on ${cat[i].id} is ${click} times!`;
    listName[i].innerHTML = `<button>${cat[i].id}</button>`;

    function addClickEventToElement(element) {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            click++;
            clickTimes[
                i
            ].textContent = `You clicked on ${cat[i].id} is ${click} times!`;
        });
    }

    addClickEventToElement(catImage[i]);
    addClickEventToElement(listName[i]);
}
