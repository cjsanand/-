// تغيير الصور تلقائيًا في السلايدر
let currentIndex = 0;
const slides = document.querySelectorAll(".slider .slide");

function changeSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}

// بدء السلايدر
setInterval(changeSlide, 3000);

// أول صورة نشطة
slides[0].classList.add("active");