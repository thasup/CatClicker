const cat = document.getElementsByTagName("div");
const catName = document.getElementsByTagName("h2");
const clickTimes = document.getElementsByTagName("h3");

for (let i = 0; i < cat.length; i++) {
    let click = 0;
    cat[i].addEventListener("click", function (e) {
        e.preventDefault();
        click++;
        catName[i].textContent = `Cat Name : ${cat[i].id}`;
        clickTimes[i].textContent = `Your click is ${click} times!`;
    });
}
