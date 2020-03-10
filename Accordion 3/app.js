function setupApp() {

  const accordion = document.querySelectorAll('.section')
  console.log(accordion)

  accordion.forEach((sec, index) => {
    sec.addEventListener('mouseenter', () => {
      sec.firstChild.classList.remove('hide')
      sec.firstChild.classList.add('text')
    })
    sec.addEventListener('mouseleave', () => {
      sec.firstChild.classList.add('hide')
      sec.firstChild.classList.remove('text')
    })
  })



}


document.addEventListener('DOMContentLoaded', setupApp)