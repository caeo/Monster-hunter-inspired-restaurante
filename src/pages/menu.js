import menuImg from '../assets/menu.png'

const menu = () => {
  const menu = document.createElement('div')
  menu.classList.add('menu')
  const menuImage = new Image()
  menuImage.src = menuImg
  menuImage.classList.add('menu-image')
  menu.appendChild(menuImage)
  return menu
}

const createMenu = () => {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(menu())
}

export default createMenu
