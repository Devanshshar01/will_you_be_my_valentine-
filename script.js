const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Button gets more confident
    yesButton.style.backgroundColor = "#f50057"; // Warmer, deep pink
    yesButton.style.boxShadow = "0 0 30px rgba(245, 0, 87, 0.5)"; // Glow effect
    yesButton.style.transform = "scale(1.1)"; // Slight jump
    setTimeout(() => yesButton.style.transform = "scale(1)", 200); // Bounce back
}

function handleYesClick() {
    // Show loading screen
    document.querySelector('.loading-overlay').style.display = 'flex';
    
    // Wait and redirect
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 2000);
}

// Floating heart particles on yes button hover
function createHeartParticle(x, y) {
    const heart = document.createElement('span');
    heart.classList.add('heart-particle');
    heart.innerHTML = ['💕', '💖', '💗', '❤️', '💘'][Math.floor(Math.random() * 5)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.yes-button');
    
    yesButton.addEventListener('mouseenter', () => {
        yesButton.heartInterval = setInterval(() => {
            const rect = yesButton.getBoundingClientRect();
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * (rect.height / 2);
            createHeartParticle(x, y);
        }, 100);
    });
    
    yesButton.addEventListener('mouseleave', () => {
        clearInterval(yesButton.heartInterval);
    });
});

// Cursor trail effect
document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('cursor-heart');
    heart.innerHTML = '❤️';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
});