import "./style.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
// import fn from "./other";

setTimeout(function(){
  import("./style.scss");
},5000);

// setTimeout(function(){
//   let p = import("./other");
//   p.then(fn=>console.log(fn));
// }, 3000);

setTimeout(async function(){
  let fn = (await import("./other")).default;
  fn();
}, 3000);

const body = document.querySelector('body');
body.innerHTML = `
  <h1>好委屈 very very 委屈</h1>
  <div class="main">
    <div class="sub">
    </div>
  </div>
  <img src="${img1}" alt="">
  <img src="${img2}" alt="">
`;