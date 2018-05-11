// const change = require('./changeBgColor');
import change from './changeBgColor';
let abcDom = document.querySelector('div.abc');
// alert(abcDom);
if(!abcDom){
  console.log('Abc Dom does not exist');
}
else{
  change(abcDom);
}