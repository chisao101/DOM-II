// Your code goes here
// Make variables for all content by class name
const mainNavigation = document.querySelector('.main-navigation');
const logoHeading = document.querySelector('.logo-heading');
const navContainer = document.querySelector('.nav-container');
// get all links
const navLink = document.querySelectorAll('.nav-link');
const image = document.querySelectorAll('img');
const intro = document.querySelector('.intro');
const textContent = document.querySelector('.text-content');
const destination = document.querySelector('.destination');
const footer = document.querySelector('.footer');
const button = document.querySelector('.btn');
const imageContent = document.querySelector('.img-content');
const contentPick = document.querySelector('.content-pick');
const contentDestination = document.querySelector('.ontent-destination');
const container = document.querySelector('.container');

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
        alert('You can\'t scroll any further!');
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