﻿const audio = new Audio("https://github.com/Marremelad/AssetsAndImages/raw/main/DIF-Sound.mp3");

const body = document.querySelector("body");

const copyRightSymbol = document.querySelector(".copy-right-symbol");
const elitePopup = document.querySelector("#elite-popup");
const closeElitePopup = document.querySelector("#close-elite-popup");

const techStackButton = document.querySelector("#tech-stack-button");
const techStack = document.querySelector("#tech-stack");

const contactMeButton = document.querySelector("#contact-me-button");
const contactIcons = document.querySelector("#contact-icons");
const contactMeText = document.querySelector("#contact-me-text");

copyRightSymbol.addEventListener("click", async () => {
    body.classList.add("the-best-team-in-the-world");
    await audio.play();
})

let userInput = "";
async function detect1337(event) {
    userInput += event.key;

    if (userInput.includes("1337")) {
        console.log(userInput);
        elitePopup.classList.add("display-elite-popup");
        userInput = "";
    }

    if (userInput.length > 4) {
        userInput = userInput.slice(-4);
    }
}

document.addEventListener("keydown", detect1337);


if (elitePopup) {
    closeElitePopup.addEventListener("click", () => {
        elitePopup.classList.remove("display-elite-popup")
    })
}

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


