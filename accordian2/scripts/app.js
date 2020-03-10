function setupApp() {

  const buttons = document.querySelectorAll('.button')
  const content = document.querySelectorAll('.content')

  console.log(buttons)
  console.log(content)

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // const join = button.innerHTML.split(' ').join('')
      // console.log(content[index].innerHTML)
      content[index].classList.toggle('show')
    })
  })


}

document.addEventListener('DOMContentLoaded', setupApp)