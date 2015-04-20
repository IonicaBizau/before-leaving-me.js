window.addEventListener("load", function () {
    var boxContainerEl = document.querySelector(".box-container");
    blm("Bye bye!");
    blm(function (e) {
        return "Hi";
    });
    blm.prepare(function (e) {
        boxContainerEl.classList.add("active");
    });

    window.addEventListener("keyup", function (e) {
        if (e.which === 27) {
            boxContainerEl.classList.remove("active");
        }
    });
});
