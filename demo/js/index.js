window.addEventListener("load", function () {
    blm("Bye bye!");
    blm(function (e) {
        return "Hi";
    });
    blm.prepare(function (e) {
        console.log(">>");
    }, -10, 500);
});
