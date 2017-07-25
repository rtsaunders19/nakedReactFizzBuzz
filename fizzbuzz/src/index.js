import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const boxes = []
for (let i = 1; i <= 100; i++) {
  let content = ''
  if (i % 3 === 0) content += 'Fizz'
  if (i % 5 === 0) content += 'Buzz'
  if (content === '') content = String(i)
  else content = React.createElement('strong', {}, content)
  boxes.push(
    React.createElement('div', {key: i}, content),
  )
}

ReactDOM.render(
  React.createElement('div', {}, boxes),
  document.getElementById('root'));
  registerServiceWorker();
