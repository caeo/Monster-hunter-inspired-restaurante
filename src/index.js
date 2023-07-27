import './style.css'
import createHome from './pages/home.js'
import logoMH from './assets/logo.png'
import createMenu from './pages/menu'

const content = document.querySelector('#content')

const createHeader = () => {
  const header = document.createElement('header')
  const divLogo = document.createElement('div')
  const divItens = document.createElement('div')
  header.setAttribute('id', 'header')

  const logoImage = new Image()
  logoImage.src = logoMH
  logoImage.alt = 'Monster Hunter logo'
  logoImage.classList.add('logo-mh')
  divLogo.classList.add('container-divLogo')
  divItens.classList.add('div-itens')

  header.appendChild(divLogo)
  divLogo.appendChild(logoImage)
  divItens.appendChild(createNavMenu())
  header.appendChild(divItens)
  return header
}

const createNavMenu = () => {
  const navContainer = document.createElement('nav')

  const buttonHome = document.createElement('button')
  buttonHome.textContent = 'Home'
  buttonHome.classList.add('navButton')
  buttonHome.classList.add('line')
  buttonHome.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
      return
    }
    setActiveButton(buttonHome)
    createHome()
  })

  const buttonMenu = document.createElement('button')
  buttonMenu.textContent = 'Menu'
  buttonMenu.classList.add('navButton')
  buttonMenu.classList.add('line')
  buttonMenu.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
      return
    }
    setActiveButton(buttonMenu)
    createMenu()
  })
  navContainer.appendChild(buttonHome)
  navContainer.appendChild(buttonMenu)
  return navContainer
}

const setActiveButton = button => {
  const buttons = document.querySelectorAll('.navButton')

  buttons.forEach(button => {
    if (button !== this) {
      button.classList.remove('active')
    }
  })
  button.classList.add('active')
}

const createMain = () => {
  const main = document.createElement('main')
  main.classList.add('main')
  main.setAttribute('id', 'main')
  return main
}

const renderWebsite = () => {
  content.appendChild(createHeader())
  content.appendChild(createMain())

  setActiveButton(document.querySelector('.navButton'))
  createHome()
}

renderWebsite()
