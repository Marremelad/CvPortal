const techStackButton = document.querySelector("#tech-stack-button");
const techStack = document.querySelector("#tech-stack");

const contactMeButton = document.querySelector("#contact-me-button");
const contactIcons = document.querySelector("#contact-icons");
const contactMeText = document.querySelector("#contact-me-text");

if (techStackButton && techStack) {
    techStackButton.addEventListener("click", () => {
        techStackButton.classList.add("remove-tech-stack-button");
        techStack.classList.add("display-tech-stack");
    });
}

if (contactMeButton && contactIcons && contactMeText) {
    contactMeButton.addEventListener("click", () => {
        contactMeText.classList.add("remove-contact-me-text");
        contactMeButton.classList.add("remove-contact-me-button");
        contactIcons.classList.add("display-contact-icons");
    });
}
