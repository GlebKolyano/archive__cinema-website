let schemeSvg = document.querySelector('.schemeSvg')
let price = document.querySelector('.price')
let countSelected = 0
let cost = 12

schemeSvg.addEventListener('click', event => {
  if (!event.target.classList.contains( 'schemeSvg')) {
    if (!event.target.classList.contains( 'selected') && !event.target.classList.contains( 'booked')) {
    event.target.classList.add('selected')
    countSelected++
    countPrice()
  } else if (event.target.classList.contains( 'selected')) {
      event.target.classList.remove('selected')
    countSelected--
    countPrice()
  }
  }
  
}
  )

function countPrice() {
  price.innerHTML = countSelected*cost+'$'
}
// mobile menu
let mobileMenuBtn = document.querySelector('.mobile-menu')
let menu = document.querySelector('.menu')

mobileMenuBtn.addEventListener('click', event => {
  event.preventDefault()
  menu.classList.toggle('activeMenu')
}) 
  
