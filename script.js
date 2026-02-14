// Floating Hearts Generator
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

// Buttons Logic
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const tryAgain = document.getElementById("tryAgain");

noBtn.addEventListener("click", () => {
    noBtn.style.display = "none";
    tryAgain.textContent = "Try again 😝";
});

yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});
