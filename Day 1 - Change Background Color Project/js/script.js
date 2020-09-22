//Choose a random color
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple' , 'black', 'white', 'brown'];

body.style.backgroundColor = 'violet'

function changeBackground(){
    const colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}
