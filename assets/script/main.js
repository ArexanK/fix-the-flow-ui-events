//What is addEventListener?

//What is an Selector?

//What is an funtion?





//1

//selecor 
let interaction = document.querySelector('a:nth-of-type(12)')

//event
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)


//function
function jumpHandler() {
  interaction.classList.toggle('jump')
}



//2
//selector
let flow = document.querySelector('a:nth-of-type(8)')

//event
flow.addEventListener('click', colorclick)

//function
function colorclick() {
  flow.classList.toggle('color')
}


//3

//selector
let the = document.querySelector('a:nth-of-type(7)')

//event
the.addEventListener('click', largebutton)


//finction
function largebutton() {
  the.classList.toggle('large')
}



//4

//selector
let sprint5 = document.querySelector('a:nth-of-type(5)')

//event
sprint5.addEventListener('click', slideleft)


//function
function slideleft() {
  sprint5.classList.toggle('slideleft')
}

//5

//selector
let interface = document.querySelector('a:nth-of-type(10)')

//event
interface.addEventListener('click', slideright)


//function
function slideright() {
  interface.classList.toggle('slideright')
}


//6
//selector
let and = document.querySelector('a:nth-of-type(3)')

//event
and.addEventListener('click', rotatebutton)

//function
function rotatebutton() {
  and.classList.toggle('rotate')
}



//7

//selector
let design = document.querySelector('a:nth-of-type(2)')

//event
design.addEventListener('click', flipbutton)

//function
function flipbutton() {
  design.classList.toggle('flip')
}



//8
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', colorchange)

function colorchange() {
  fix.classList.toggle('colorchange')
}

//9
//selector
let frontend = document.querySelector('a:nth-of-type(1)')

//event
frontend.addEventListener('click', colorslide)


//function
function colorslide() {
  frontend.classList.toggle('colorslide')
}

//10
//selector
let user = document.querySelector('a:nth-of-type(9)')

//event
user.addEventListener('click', shapebutton)

//function
function shapebutton() {
  user.classList.toggle('shape')
}


//11

//selector
let development = document.querySelector('a:nth-of-type(4)')


//event
development.addEventListener('click', shakebutton)


//function
function shakebutton() {
  development.classList.toggle('shake')
}