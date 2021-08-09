const busImg = document.querySelector('img')
const mainContainer = document.querySelector('.home')
const mainDoc = document.querySelector('body')
const navLinks = document.querySelector('nav')
const button = document.querySelectorAll('.btn')
const footer = document.querySelector('.footer p')


navLinks.addEventListener('click', e => {
    e.preventDefault()
})


mainDoc.addEventListener('click', e => {
    e.target.style.color = 'red'
    
})


mainContainer.addEventListener('click', e => {
    e.target.style.color = 'blue'
    e.stopPropagation()
})

mainContainer.addEventListener('focus', e => {
    e.target.style.backgroundColor = 'pink';
  });


busImg.addEventListener('mouseover', e => {
    e.target.style.border = '5px purple solid'
})


busImg.addEventListener('mouseleave', e => {
    e.target.style.border = 'none'
})

document.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        alert('Lambda is awesome!')
    }
})

busImg.addEventListener('wheel', zoom)

function zoom(event) {
    
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

window.addEventListener('load', e => {
    console.log('The page has loaded')
})


button.forEach(item => {
    item.addEventListener('dblclick', e =>{
        e.target.style.backgroundColor = 'green'
    })
})


document.addEventListener('scroll', e => {
    console.log('scrolling');
  });

  footer.addEventListener('copy', e => {
    console.log('copying the footer!')
  });
