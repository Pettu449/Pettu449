const card = document.querySelector('#card');
const cardHeader = card.querySelector('header');
const resetBin = document.querySelector('.Reset');
let clicked = false;
let startTop = card.offsetTop;
let startLeft = card.offsetLeft;
let offsetX, offsetY;

cardHeader.addEventListener('mousedown', (e) =>{
    clicked = true;
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;                   
})

document.addEventListener('mouseup', () =>{
    clicked = false;
})

document.addEventListener('mousemove', (e) =>{
    if (!clicked) return;
    const { clientX, clientY } = e;
    card.style.left = `${clientX - offsetX}px`;
    card.style.top = `${clientY - offsetY}px`;
})

function ResetPosition() {
    card.style.left = `${startLeft}px`;
    card.style.top = `${startTop}px`;
}

resetBin.addEventListener('click', ResetPosition);