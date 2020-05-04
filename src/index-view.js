import { index } from './index.js';
import { addImage } from './image.js';
import { helloWorldButton } from './components/helloworld-button.js';
import { Header } from './components/header.js'

const helloworldButton = new helloWorldButton();
const header = new Header();
header.render();
helloworldButton.render();
index();
addImage();

