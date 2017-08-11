window.onload = function() {
    const text = document.querySelector('#text'),
        musicControl = document.querySelector("#musicControl"),
        div1 = document.querySelector('#div1');
    var times = 0;
    let Base = window.Base ? Base : {
        askForText: function() {
            var xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest;
            } else {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            };
            xhr.open('GET', "text.json", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(JSON.parse(xhr.responseText));
                    div1.innerHTML = JSON.parse(xhr.responseText).data;
                    article = div1.innerHTML;
                    articleArray = article.trim().split("。");
                    articleArray.forEach(function(element, index, array) {
                        if (element.length == 0) {
                            array.splice(index);
                        };
                    }, this);
                } else {}
            };
            xhr.send(null);
        }
    };
    Base.askForText();
    var timer = setInterval(function() {
        if (times < articleArray.length) {
            let li = document.createElement('li');
            li.innerHTML = articleArray[times];
            // li.setAttribute("class", "active");
            text.appendChild(li);
            times++;
            // li.removeAttribute("class");
        } else {
            clearInterval(timer);
            times = null;
        }
    }, 1000);
    musicControl.addEventListener('click', function() {
        if (this.innerHTML == "关") {
            this.innerHTML = "开";
            document.querySelectorAll('audio')[0].play();
        } else {
            this.innerHTML = "关";
            document.querySelectorAll('audio')[0].pause();
        }
    }, false);
};