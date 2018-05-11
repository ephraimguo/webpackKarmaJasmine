export var group = "typescript";
export function change(){
  const h1 = document.createElement('h1');
  h1.innerText = "hello world h1 --- now is editted";
  document.body.appendChild(h1);
}