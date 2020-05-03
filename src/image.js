import jrntr from './jrntr.jpg';

export function addImage(){
    const img = document.createElement("img");
    img.alt="jr ntr";
    img.width = 300 ;
    img.src = jrntr;
    const body = document.querySelector('body');
    body.appendChild(img);
}