/* Typewriter Effect Logic */
const typewriterSpan = document.querySelector(".typewriter-text");
const words = JSON.parse(typewriterSpan.getAttribute("data-text"));

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const pauseTime = 2000;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
}

document.addEventListener("DOMContentLoaded", type);
