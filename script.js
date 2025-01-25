document.addEventListener("DOMContentLoaded", function () {
    // Image slider logic
    const slides = document.querySelectorAll(".slider img");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-slide every 3 seconds
    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
});
