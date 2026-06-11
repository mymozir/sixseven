const photosContainer = document.querySelector(".photos");

const photosData = [
    {
        src: "img/photo_5289690526892817557_x.jpg",
        title: "кошко",
        desc: "я очень люблю кошек и мне очень нравится их фоткать. особенно мою кошечку ириса4ку"
    },
    {
        src: "img/photo_5298614747379391552_y.jpg",
        title: "фтчкээ",
        desc: "я люблю фотографировать то, что меня окружает, чтобы запоминать мелкие радости"
    },
    {
        src: "img/бугир.jpg",
        title: "чут-чут миня",
        desc: "мои фотки, которые делают меня счастливой и сохранили теплые воспоминания"
    }
];

let current = 0;

const title = document.getElementById("photo-title");
const desc = document.getElementById("photo-desc");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

function renderCarousel() {

    photosContainer.innerHTML = "";

    const left =
        (current - 1 + photosData.length) % photosData.length;

    const right =
        (current + 1) % photosData.length;

    const order = [left, current, right];

    order.forEach((index, position) => {

        const img = document.createElement("img");

        img.src = photosData[index].src;

        img.classList.add("photo");

        if (position === 1) {
            img.classList.add("active");
        }

        img.addEventListener("click", () => {

            current = index;

            renderCarousel();

        });

        photosContainer.appendChild(img);

    });

    title.textContent = photosData[current].title;
    desc.textContent = photosData[current].desc;

}

prev.addEventListener("click", () => {

    current =
        (current - 1 + photosData.length) % photosData.length;

    renderCarousel();

});

next.addEventListener("click", () => {

    current =
        (current + 1) % photosData.length;

    renderCarousel();

});

renderCarousel();
