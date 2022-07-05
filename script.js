/* início dropdown elementos */
navel.addEventListener('click', () =>{
  contel.classList.toggle("conteiner-nav");
  navel.classList.toggle("btn-nav-on");
  btnel1.classList.toggle("btn-nav-el-on");
  btnel2.classList.toggle("btn-nav-el-on");
  btnel3.classList.toggle("btn-nav-el-on");
  btnel4.classList.toggle("btn-nav-el-on");
})
/* fim dropdow elementos */


/* Login */
ativar.addEventListener('click', () =>{
    modal.classList.toggle("animar");
})

/* share */
share.addEventListener('click', () =>{
    insta.classList.toggle("c-insta");
    github.classList.toggle("c-github");
    linkedin.classList.toggle("c-linkedin");
  })


  /* js cards */
  /* pode ser usado para mostrar elementos quando vizualizados na tela */
  const observer = new IntersectionObserver( entries => {
    console.log(entries)
  
    Array.from(entries).forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('init-hidden-off')
      }
    })
   
  }, {
   threshold: [0.25 , 0.5 , 0.75 , 1]
  })
  Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
  observer.observe(element)
  })
  


  const observer1 = new IntersectionObserver( entries => {
    console.log(entries)
  
    Array.from(entries).forEach(entry => {
      if (entry.intersectionRatio >= 1) {
      entry.target.classList.add('mov')
      }
    })
   
  }, {
   threshold: 1
  })
  Array.from(document.querySelectorAll('.no-mov')).forEach( element => {
  observer1.observe(element)
  })

    const observer2 = new IntersectionObserver( entries => {
    console.log(entries)
  
    Array.from(entries).forEach(entry => {
      if (entry.intersectionRatio >= 1) {
      entry.target.classList.add('mov-t')
      }
    })
   
  }, {
   threshold: 1
  })
  Array.from(document.querySelectorAll('.no-mov-t')).forEach( element => {
  observer2.observe(element)
  })
  
  
  
  
  