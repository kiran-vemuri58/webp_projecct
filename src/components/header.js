import './header.scss'

export class Header{
    render(value){
        const h1 = document.createElement('h1');
        h1.innerText = 'header' + value;
        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}