const body = document.body.style;
let color =[ "#3E6990", "#C9ADA7", "#7CDEDC",  "#59344F", "#885053", "#B6D094", "#9B7EDE",  "#832161", "#FC9E4F", "#F4442E" ];

const button = document.getElementById('colorButton');
button.addEventListener('click', changeColor);

function changeColor () {
    document.body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}

