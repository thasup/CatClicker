function runScript() {
    const model = {
        cats: [
            {
                name: "Alex",
                imgSrc: "../img/cat0.jpg",
                clickCount: 0,
            },
            {
                name: "Brian",
                imgSrc: "../img/cat1.jpg",
                clickCount: 0,
            },
            {
                name: "Mimi",
                imgSrc: "../img/cat2.jpg",
                clickCount: 0,
            },
            {
                name: "Peter",
                imgSrc: "../img/cat3.jpg",
                clickCount: 0,
            },
            {
                name: "Michael",
                imgSrc: "../img/cat4.jpg",
                clickCount: 0,
            },
            {
                name: "Lala",
                imgSrc: "../img/cat5.jpg",
                clickCount: 0,
            },
            {
                name: "Mumu",
                imgSrc: "../img/cat6.jpg",
                clickCount: 0,
            },
            {
                name: "Jezzy",
                imgSrc: "../img/cat7.jpg",
                clickCount: 0,
            },
            {
                name: "Tom",
                imgSrc: "../img/cat8.jpg",
                clickCount: 0,
            },
            {
                name: "Tim",
                imgSrc: "../img/cat9.jpg",
                clickCount: 0,
            },
            {
                name: "Nancy",
                imgSrc: "../img/cat10.jpg",
                clickCount: 0,
            },
            {
                name: "Taro",
                imgSrc: "../img/cat11.jpg",
                clickCount: 0,
            },
        ],

        init: function () {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify(model.cats);
            }
        },

        add: function (obj) {
            const data = JSON.parse(localStorage.cats);
            data.push(obj);
            localStorage.cats = JSON.stringify(data);
        },

        updateCount: function (index, value) {
            const data = JSON.parse(localStorage.cats);
            data[index].clickCount = value;
            localStorage.cats = JSON.stringify(data);
        },

        getAllCats: function () {
            return JSON.parse(localStorage.cats);
        },
    };

    const controller = {
        init: function () {
            model.init();
            view.init();
        },

        getCats: function () {
            return model.cats;
        },

        getCatName: function () {
            const nameArray = [];
            for (let i = 0; i < model.cats.length; i++) {
                nameArray.push(model.cats[i].name);
            }
            return nameArray;
        },

        getClickCount: function () {
            const countArray = [];
            const catsOnStorage = model.getAllCats();
            for (let i = 0; i < model.cats.length; i++) {
                countArray.push(catsOnStorage[i].clickCount);
            }
            return countArray;
        },

        getImgSrc: function () {
            const imgArray = [];
            for (let i = 0; i < model.cats.length; i++) {
                imgArray.push(model.cats[i].imgSrc);
            }
            return imgArray;
        },

        incrementCounter: function (i) {
            const catsOnStorage = model.getAllCats();
            catsOnStorage[i].clickCount++;
            model.updateCount(i, catsOnStorage[i].clickCount);
            view.render(i);
        },
    };

    const view = {
        init: function () {
            this.catList = document.getElementsByClassName("cat-list");
            this.cats = document.getElementsByClassName("cats");
            this.buttonName = document.getElementsByClassName("cat-btn");

            for (let i = 0; i < this.cats.length; i++) {
                this.cats[i].innerHTML = `
                                                   <img src="${
                                                       controller.getImgSrc()[i]
                                                   }" alt="cute cat">
                                                   <h1 class="cat-name mui--text-display1">${
                                                       controller.getCatName()[
                                                           i
                                                       ]
                                                   }</h1>
                                                <h2 class="cat-count">You've clicked on ${
                                                    controller.getCatName()[i]
                                                } <span class="click">${
                    controller.getClickCount()[i]
                }</span> times!</h2>`;

                this.catList[0].appendChild(document.createElement("li"));

                this.catName = document.getElementsByClassName("cat-name");
                this.catCount = document.getElementsByClassName("cat-count");
                this.li = document.getElementsByTagName("li");

                this.li[
                    i
                ].innerHTML = `<button class="mui-btn mui-btn--primary cat-btn">${
                    controller.getCatName()[i]
                }</button>`;

                this.render(i);

                this.cats[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    controller.incrementCounter(i);
                });

                this.buttonName[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    controller.incrementCounter(i);
                });
            }
        },

        render: function (i) {
            this.catCount[i].innerHTML = `You've clicked on ${
                controller.getCatName()[i]
            } <span class="click">${
                controller.getClickCount()[i]
            }</span> times!`;
        },
    };

    controller.init();
}

runScript();
