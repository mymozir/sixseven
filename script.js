const photos = document.querySelectorAll(".photo");

const title = document.getElementById("photo-title");
const desc = document.getElementById("photo-desc");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;

function update(index) {

    photos.forEach(p => p.classList.remove("active"));

    const active = photos[index];
    active.classList.add("active");

    title.textContent = active.dataset.title;
    desc.textContent = active.dataset.desc;

    current = index;
}

/* click on image */
photos.forEach((photo, i) => {

    photo.addEventListener("click", () => update(i));

});

/* arrows */
prev.addEventListener("click", () => {

    current = (current - 1 + photos.length) % photos.length;
    update(current);

});

next.addEventListener("click", () => {

    current = (current + 1) % photos.length;
    update(current);

});
