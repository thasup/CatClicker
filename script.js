const cat = document.getElementsByTagName("div");
for (let i = 0; i < cat.length; i++) {
    console.log(cat);
    cat[i].innerHTML = `<img src="./img/cat${i}.jpg" alt="cat" />`;

    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    cat[i].appendChild(h2);
    cat[i].appendChild(h3);

    let click = 0;
    const catName = document.getElementsByTagName("h2");
    const catImage = document.getElementsByTagName("img");
    const clickTimes = document.getElementsByTagName("h3");

    catName[i].textContent = `Cat Name : ${cat[i].id}`;
    clickTimes[i].textContent = `Your click on ${cat[i].id} is ${click} times!`;

    catImage[i].addEventListener("click", function (e) {
        e.preventDefault();
        click++;
        clickTimes[
            i
        ].textContent = `Your click on ${cat[i].id} is ${click} times!`;
    });
}
