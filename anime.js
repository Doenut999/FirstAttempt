const navLinks = document.querySelectorAll(".first-intro")
console.log(navLinks)


anime({
  targets: navLinks,
  translateY: 350,
  duration:  2000,
  loop: true,
})


const logo = document.querySelector('#logo')
const bee = anime({
  targets: logo,
  translateX: 15,
  duration: 2000,
});


logo.addEventListener('click', bee)


anime({
  targets: ['#slim-things','#big-think'],
  backgroundColor: "#648fc0",
  border: '10px solid #e9fc18',
  borderRadius: ['0%', '50%'],
  translateX: '350px',
  rotate: '2turn',
  left: '240px',
  duration: 4000,
  easing: 'easeInOutExpo'
});

