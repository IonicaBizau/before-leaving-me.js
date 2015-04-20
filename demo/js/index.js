// Listen for the page load
window.addEventListener("load", function () {

    // Select the box container element
    var boxContainerEl = document.querySelector(".box-container");

    // *before leaving me* display "Bye bye!"
    blm("Do you really want to leave?");

    // ...and "Hi", the current minute is odd
    blm(function (e) {
        if (new Date().getMinutes() % 2 === 1) {
            return "BTW, this is an odd minute.";
        }
    });

    // When *preparing to leave me* do something
    blm.prepare(function (e) {
        boxContainerEl.classList.add("active");
    });

    // Listen for the Esc key press
    window.addEventListener("keyup", function (e) {
        if (e.which === 27) {
            boxContainerEl.classList.remove("active");
        }
    });
});
