window.addEventListener("load", function () {
    blm("Bye bye!");
    blm(function (e) {
        return "Hi";
    });
    blm.prepare(function (e) {
        document.querySelector(".box").classList.add("active");
    });
});
