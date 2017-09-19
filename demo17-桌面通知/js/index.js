var titleInit = document.title, isShine = true;

setInterval(function () {
    var title = document.title;
    if (isShine == true) {
        if (/新/.test(title) == false) {
            document.title = '【你有新消息】';
        } else {
            document.title = '【　　　　　】';
        }
    } else {
        document.title = titleInit;
    }
}, 500);

window.onfocus = function () {
    isShine = false;
};
window.onblur = function () {
    isShine = true;
};

// for IE
document.onfocusin = function () {
    isShine = false;
};
document.onfocusout = function () {
    isShine = true;
}