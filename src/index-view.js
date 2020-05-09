import { index } from './index.js';
import { addImage } from './image.js';
import { helloWorldButton } from './components/helloworld-button.js';
import { Header } from './components/header.js';
import _ from 'lodash';


const helloworldButton = new helloWorldButton();
const header = new Header();
header.render(_.upperFirst('header 1'));
helloworldButton.render();
index();
addImage();

