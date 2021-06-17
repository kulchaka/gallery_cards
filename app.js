const slides = document.querySelectorAll('.slide')


slides.forEach(e => {
  e.addEventListener('click', () => {
    e.classList.add('active')
  })
})
