(function(){
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 600 ){
            a = 600;
        } 
        //600/w = 100/font-size
        rem = a / 6;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();
