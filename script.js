const emojis = ["😘", "💞", "🦋", "🤍", "🎗️", "🩵", "🫧", "🎀", "🥺", "🌸", "🫀", "💘", "🌹", "💋"];

function startEmojiRain() {
    for (let i = 0; i < 30; i++) { 
        setTimeout(() => {
            createEmoji();
        }, i * 300);
    }
}

function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = Math.random() * 5 + 5 + "s"; // Slow falling speed
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 10000);
}

// Slideshow Script
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}
showSlides();
