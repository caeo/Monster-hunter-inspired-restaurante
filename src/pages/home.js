import grammewsterimage from '../assets/grameowster.png'
import chefs from '../assets/chefs.png'

const home = () => {
  const homeContainer = document.createElement('div')
  const textContainer = document.createElement('div')
  const imgCatContainer = document.createElement('div')
  textContainer.classList.add('text-container')
  homeContainer.classList.add('home')
  imgCatContainer.classList.add('container-img-cat')

  const grammeowsterChef = new Image()
  grammeowsterChef.src = grammewsterimage
  const imgcat = new Image()
  imgcat.src = chefs
  imgcat.classList.add('image-cat')
  grammeowsterChef.classList.add('image-grammeow')

  const callingText = document.createElement('p')
  callingText.textContent =
    'Come restore your adventurer energy with our famous chefs!'
  callingText.classList.add('calling-text')
  homeContainer.appendChild(grammeowsterChef)
  homeContainer.appendChild(textContainer)
  textContainer.appendChild(callingText)
  textContainer.appendChild(imgCatContainer)
  imgCatContainer.appendChild(imgcat)

  return homeContainer
}

const createHome = () => {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(home())
}

export default createHome
