const bell = document.getElementById("bell");


bell.addEventListener("click", () => {
    const shortcut = document.getElementById("shortcut");

    shortcut.classList.toggle("active_shortcut");
})