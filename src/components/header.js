import './header.scss'

export class Header{
    render(){
        const h1 = document.createElement('h1');
        h1.innerText = 'header';
        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}