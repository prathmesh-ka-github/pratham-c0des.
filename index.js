function ham() {
    var menu = document.getElementById("ham-menu-id");
    if (menu.style.opacity === '1') {
        menu.style.opacity = '0';
        menu.style.top = '-300px';
    }
    else {
        menu.style.opacity = '1';
        menu.style.top = '60px';
    }
}

projectDescription = document.getElementById('project-description')
const elementposition = document.getElementById('getposition')

let rect = elementposition.getBoundingClientRect();
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const position = {
    top: rect.top + scrollTop,
};

document.addEventListener('scroll', (e) => {
    const verticalScrollPosition = window.scrollY;
    // console.log("Vertical Scroll Position:", verticalScrollPosition);
    if (verticalScrollPosition > position.top) {
        projectDescription.innerHTML = 'Click to see all 👆🏼'
    }
    else {
        projectDescription.innerHTML = '<img src="essentials/scrollanimation-crop.gif" height="40px" alt="scroll">'

    }
})

