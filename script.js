let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }
    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Optional: Automatically rotate images every 5 seconds
setInterval(nextSlide, 5000);