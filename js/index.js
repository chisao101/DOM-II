// Your code goes here

// variables for use with events
// get all links
const navLink = document.querySelectorAll('.nav-link');
// get all images
const image = document.querySelectorAll('img');
// get all buttons
const buttons = document.querySelectorAll('.btn');


// events 1 - 10

// One
// mouseover event
// changes link color and bg color
navLink.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#fff';
            link.style.background = '#a8a7b8';
        })
})

// Two
// mouseout event
// returns default style
navLink.forEach(link => {
        link.addEventListener('mouseout', () => {
        link.style.color = '#000';
        link.style.background = 'none';
        link.style.padding = '0em';
    })
})

// Three
// keydown event
// alerts the key pressed
window.addEventListener('keydown', (event) => {
    alert('You pressed the ' + event.key + ' key!');
})

// Four
// dblclick event
// flip images on dblclick
image.forEach(img => {
    img.addEventListener('dblclick', () => {
        img.style.transform = 'scaleX(-1)';
        })
})

// Five
// scroll event
// alert user when can't scroll further
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(scrolled === scrollable){
        alert('You have scrolled ' + scrollable + ' pixels, and that is the end of the page. You can\'t scroll any further!');
    }
})

// Six
// focus event
// add red border on focus
navLink.forEach(link => {
    link.addEventListener('focus', () => {
        link.style.border = '1px solid red'
    })
})

// Seven
// resize event
// log window width to console on resize
window.addEventListener('resize', () => {
   const windowWidth = window.innerWidth;
   console.log('The window is now ' + windowWidth + ' pixels wide.');
})

// Eight
// click event
// alert user when button clicked
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Can\'t sign up for this right now!');
    })
})

// Nine
// wheel event
// logs when the wheel moves to the console
// couldn't think of anything else to do with that
window.addEventListener('wheel', () => {
    console.log('the wheel moved');
})

// Ten
// select event
// alert selected text to the user
// create new input element
let inputElement = document.createElement('input');
// set the value
inputElement.setAttribute('value', 'Select this text!');
// place input in content-section
const contentSection = document.querySelector('.content-section');
contentSection.appendChild(inputElement);
inputElement.addEventListener('select', () => {
    alert('You selected the text!');
})

// that's all 10 finished.

