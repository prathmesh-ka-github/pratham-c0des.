function ham() {
    var menu = document.getElementById("ham-menu-id");
    if (menu.style.opacity === '1'){
        menu.style.opacity = '0';
        menu.style.top = '-300px';
    }
    else {
        menu.style.opacity = '1';
        menu.style.top = '60px';
    }
}

projectDescription = document.getElementById('project-description')

document.addEventListener('scroll', (e) => {
    const verticalScrollPosition = window.scrollY;
    console.log("Vertical Scroll Position:", verticalScrollPosition);
    if (verticalScrollPosition > 5188) {
        projectDescription.innerHTML = 'Click to see all 👆🏼'
    }
    else {
        projectDescription.innerHTML = '<img src="essentials/scrollanimation-crop.gif" height="40px" alt="scroll">'

    }
})

