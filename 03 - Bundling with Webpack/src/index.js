import { join } from 'lodash';

function component() {
    const element = document.createElement('div');
    element.className = "element";
    element.id = `element`;
    element.innerHTML = join(['Webpack is a JavaScript module bundler',
        'It takes modules with dependencies and generates static assets representing those modules'], '. ');
    return element;
  }

document.body.appendChild(component());