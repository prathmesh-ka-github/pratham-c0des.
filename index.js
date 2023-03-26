function ham() {
    var menu = document.getElementById("ham-menu-id");
    if (menu.style.opacity === '1'){
        menu.style.opacity = '0';
        menu.style.top = '-255px';
    }
    else {
        menu.style.opacity = '1';
        menu.style.top = '60px';
    }
}