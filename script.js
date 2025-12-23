const heroImage = document.querySelector(".hero-image");
const nextArrow = document.getElementById("next-arrow");

// Scroll zoom effect
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scaleValue = 1 + scrollY / 2000;
    heroImage.style.transform = `scale(${scaleValue})`;
});

// Slideshow images
const images = [
    "images/imagehometest.jpg",
];

let currentIndex = 0;

// Start with solid background color
heroImage.style.backgroundImage = ""; // no image
heroImage.style.backgroundColor = "#1a1a1d"; // match site background
heroImage.style.opacity = 1;

// Fade in first image after 5 seconds
setTimeout(() => {
    heroImage.style.transition = "opacity 1s ease-in-out"; // smooth fade
    heroImage.style.opacity = 0; // fade out solid color
    setTimeout(() => {
        heroImage.style.backgroundImage = `url('${images[currentIndex]}')`;
        heroImage.style.opacity = 1; // fade in first image
    }, 1000); // matches fade out duration
}, 1730);

// Auto-change every 10 seconds
setInterval(() => {
    changeImage();
}, 10000);

// Function to fade images
function changeImage() {
    heroImage.style.opacity = 0; // fade out
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.style.backgroundImage = `url('${images[currentIndex]}')`;
        heroImage.style.opacity = 1; // fade in
    }, 500); // matches fade duration
}


// Makes the home page image and text move as user scrolls
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Slight scale effect on image
    const scaleValue = 1 + scrollY / 3000;
    heroImage.style.transform = `scale(${scaleValue}) translateY(${scrollY / 10}px)`;

    // Optional: move text slightly down for parallax
    const heroText = document.querySelector(".hero-text");
    heroText.style.transform = `translateY(${scrollY / 20}px)`;
});
