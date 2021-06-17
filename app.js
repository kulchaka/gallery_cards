const slides = document.querySelectorAll('.slide')


slides.forEach(e => {
  e.addEventListener('click', () => {
    clearActiveSlide()
    e.classList.add('active')
  })
})

function clearActiveSlide() {
  slides.forEach(e => {
    e.classList.remove('active')
  })
}
