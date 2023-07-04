const btnWrap = document.querySelector('.gnb');
const btns = btnWrap.querySelectorAll('li');
const section = document.querySelectorAll('section');

const posrr = [];
for(let el of section){
  posrr.push(el.getBoundingClientRect().top);
}

btns.forEach((el, idx)=>{
  el.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo({left:0, top:posrr[idx], behavior: "smooth"});
  })
})