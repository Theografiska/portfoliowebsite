document.addEventListener("DOMContentLoaded", () => {
    const typewriterText = document.querySelector(".typewriter-text");
    const texts = [
        "Front-End Developer",
        "Back-End Developer (soon)",
        "Full-Stack Engineer (soon)"
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        if (index < texts.length) {
            if (!isDeleting && charIndex < texts[index].length) {
                // Typing text
                currentText += texts[index].charAt(charIndex);
                charIndex++;
                typewriterText.textContent = currentText;
                setTimeout(type, 75);
            } else if (isDeleting && charIndex >= 0) {
                // Deleting text
                currentText = currentText.substring(0, charIndex);
                charIndex--;
                typewriterText.textContent = currentText;
                setTimeout(type, 50);
            } else {
                // Switch between typing and deleting
                isDeleting = !isDeleting;

                if (!isDeleting) {
                    index++;
                    if (index === texts.length) index = 0;
                }
                setTimeout(type, 500);
            }
        }
    }

    type();
});