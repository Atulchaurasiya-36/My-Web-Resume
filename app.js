document.addEventListener("DOMContentLoaded", function() {
    let ul = document.querySelector("ul");
    let bar = document.getElementById("bar");

    bar.addEventListener("click", () => {
        ul.classList.toggle("showData");
        if (ul.classList.contains("showData")) {
            bar.classList.replace("fa-bars", "fa-xmark");
        } else {
            bar.classList.replace("fa-xmark", "fa-bars");
        }
    });
});
