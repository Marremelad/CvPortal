const button = document.querySelector("#tech-stack-button");
const techStack = document.querySelector("#tech-stack");
const anchor = document.querySelector("#tech-stack-anchor")


anchor.addEventListener("click", (event) => {
    event.preventDefault()
})
button.addEventListener("click", () => {
    button.classList.add("remove-tech-stack-button");
    techStack.classList.add("display-tech-stack");
});

// button.style.display = "none"; // Hide the button
// techStack.style.visibility = "visible"; // Show the div with the icons