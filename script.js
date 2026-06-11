const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20
});

const titleEl = document.getElementById("photo-title");
const descEl = document.getElementById("photo-desc");

function updateDescription() {
    const slide = swiper.slides[swiper.activeIndex];

    titleEl.textContent = slide.dataset.title;
    descEl.textContent = slide.dataset.desc;
}

// Обновляем описание при смене слайда
swiper.on("slideChange", updateDescription);

// И при первой загрузке страницы
updateDescription();
