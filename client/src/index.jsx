const MY_SECRET = require('../../config')

console.log('Hello Node.js project.');
const React= require('react');
const ReactDOM = require('react-dom');

const title = 'Testing for Bundle';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);



console.log(MY_SECRET);