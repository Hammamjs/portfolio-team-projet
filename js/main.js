// store canvas element
let canvas = document.querySelector('canvas'),
// store canvs libraries in c variable
    context = canvas.getContext('2d');

// make canvs equal inner with
canvas.width = window.innerWidth - 5.5;
// make canvs equal inner height
canvas.height = window.innerHeight - 5.1;
// init canvas function

// to resize the window

window.addEventListener('resize', () => {
// make canvs equal inner with
canvas.width = window.innerWidth - 5.5;
// make canvs equal inner height
canvas.height = window.innerHeight - 5.1;
circles = [];
generateCircles();
})

// draw circles

function Circles(x , y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = () => {
    // Start new Path
    context.beginPath();
    // to draw lines and circles
    context.arc(this.x, this.y, Math.PI * 2, 0, this.radius , false);
    // to Actite arc Function
    // context.stroke();
    context.fill();
    }

    this.update = () => {
        if (this.x - this.radius > innerWidth || this.x + this.radius < 0) {
            this.dx = -dx;
        }
        this.x += this.dx;
                if (this.y - this.radius > innerHeight || this.y + this.radius < 0) {
            this.dy = -dy;
        }
        this.y += this.dy;
        this.draw();
    }
}

let circles = [];
let arrayColors = [
    '#009688',
    '#F869D5',
    '#FFCF1B',
    '#0052D4',
    '#A7CBD9',
    '#EAE5D1',
    '#F9BF51'
]

function generateCircles() {
    for (let i = 0; i < 500 ; i ++) {
// Create random color
    let color = Math.floor(Math.random() * arrayColors.length)
    // radius
let radius = 30;
    // velocity
    dx = (Math.random() - .5),
    dy = (Math.random() - .5),
// x equal width
    x = Math.random() * (innerWidth - radius * 2) + radius,
// y equal Height
    y = Math.random() * (innerHeight - radius * 2) + radius;
    context.fillStyle = arrayColors[color];
    circles.push(new Circles(x, y, dx , dy , radius))
}
}


function animation() {
    requestAnimationFrame(animation);
    // clear repeation
    context.clearRect(0 , 0 , innerWidth, innerHeight);
    circles.forEach(circle => {
        circle.update();
    })
}
generateCircles();




// Trigger animation function
animation();

// get font icon (Bar);

let iconButton = document.querySelector('.button'),
// get ul List 
    ulList = document.querySelector('.links ul ')

    // console.log(iconButton);

iconButton.addEventListener('click' , () => {
    ulList.classList.toggle('display');
})


// get all li links
let lis = document.querySelectorAll('.list li');
active(lis);

// active link function
function active(items) {
    items.forEach(el => {
        el.addEventListener('click', e => {
        // prevent the normal behavior
        e.preventDefault();
        // onClick remove all active classes
        lis.forEach(li => {
            li.classList.remove('active');
        })
        // Get the current clicked element and add active class 
        el.classList.add('active');
    })
    })
} 