window.onload = function() {
    var root = document.getElementsByTagName('html')[0];
    root.classList.add('preloaded');
    root.classList.add('preloading');
    var preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.display = "none";
        root.classList.remove('preloading');
    }, 3000);
};