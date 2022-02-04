const cat = document.getElementsByTagName("img");
const number = document.getElementsByTagName("h2");
let i = 0;

cat[0].addEventListener("click", function (e) {
    e.preventDefault();
    i++;
    number[0].textContent = `Your click is ${i} times!`;
});
