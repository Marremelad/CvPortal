﻿const eliteMessage = document.querySelector(".elite-message");

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function detect1337(event) {
    userInput += event.key;

    if (userInput.includes("1337")) {
        userInput = userInput.slice(-4);

        eliteMessage.classList.add("display-elite-message");
        await sleep(3500)
        eliteMessage.classList.remove("display-elite-message");

        userInput = "";
    }

    if (userInput.length > 4) {
        userInput = userInput.slice(-4);
    }
}

document.addEventListener("keydown", detect1337);

let userInput = "";



