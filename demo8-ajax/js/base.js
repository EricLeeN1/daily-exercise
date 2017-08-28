window.onload = function () {
    var xmlhttp;
    xmlhttp = CreateXHR();
    xmlhttp.open("GET", "test.json", true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonstr = xmlhttp.responseText;
            console.log(jsonstr);
        }
    }
    function CreateXHR() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
}