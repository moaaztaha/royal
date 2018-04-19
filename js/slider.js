var current = 1;
showSlide(current);

function nextSlide(n) {
    showSlide(current += n);
}

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("home-background");
    if (n > 3) {current = 1}
    if (n < 1) {current = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[current-1].style.display = "block";
}
