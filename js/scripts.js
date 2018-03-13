//select the nav bar
const navBar = document.querySelector('.main-nav-ul');
//establish how far down the page the nav bar starts
const navBarTop = navBar.offsetTop;

// function stickyNavigation() {
//     console.log('navBarTop = ' + navBarTop);
//     console.log('scrollY = ' + window.scrollY);
// }

// window.addEventListener('scroll', stickyNavigation);

function stickyNavBar() {
    //apply fixed position to nav bar without overwritting css rules
    if (window.scrollY >= navBarTop) {
        // navBar.style.paddingTop = "40px";
        navBar.classList.add('fixed-nav');
    } else {
        navBar.style.paddingTop = "0";
        navBar.classList.remove('fixed-nav');
    }


}

window.addEventListener('scroll', stickyNavBar);






// capturs photo genre ul
const ul = document.querySelector('.photoGenreList');
//stores ul children, in an array named genreList
const genreList = ul.children;


const thumbnailWrap = document.querySelector('.thumbnail-wrap');
//main image div
const mainImage = document.querySelector('.main-image');
//img tag, the child of the main image div ^^
const img = mainImage.firstElementChild;
//captures all the genre divs and stores them in an array thumbnailChildren
const thumbnailChildren = thumbnailWrap.children;
//night sky div
const nightSky = document.querySelector('#nightSky');
//landscape div
const landscapes = document.querySelector('#landscapes');
//myCity div
const myCity = document.querySelector('#myCity');
const longExposure = document.querySelector('#longExposure');




ul.addEventListener('click', (e) => {
    e.preventDefault();
    //captures the element that triggers event and puts it in var click
    const click = e.target;
    //
    for (let i = 0; i < genreList.length; i++) {
        if (click.textContent === genreList[i].textContent) {

            thumbnailChildren[i].style.display = 'block';
        } else {
            thumbnailChildren[i].style.display = 'none';
        }
    }
});


thumbnailWrap.addEventListener('click', (e) => {
    e.preventDefault();
    //camputres the element that triggers event and puts it in var click 
    const click = e.target;
    //var clickCopy is defined and the value is set to click event object
    const clickCopy = click;
    console.log(click.className);
    console.log(clickCopy);
    if (click) {
        img.src = click.src;
        img.className = 'main-img';
    } else {
        mainImage.style.display = "none";
    }


});