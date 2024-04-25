import { name } from './examle';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = "Name is " + name;
  btn.innerHTML = '   Click me and check the console!';

  btn.onclick = printMe;
  element.appendChild(btn);

  // element.classList.add("cl-1");
 // const image = new Image();
  // image.src = Img_Two;
 //  element.appendChild(image);

  return element;
}

document.body.appendChild(component());