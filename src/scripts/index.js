const cards = [
    {
      name: 'death-rally',
      img: './images/death.jpg',
    },
    {
      name: 'duke-nukem',
      img: './images/duke.jpg',
    },
    {
     name: 'elvira',
     img: './images/elvira.jpg',
    },
    {
     name: 'halo',
     img: './images/halo.jpg',
    },
    {
     name: 'heroes',
     img: './images/heroes.jpg',
    },
    {
     name: 'quake',
     img: './images/quake.jpg',
    },
    {
     name: 'shadow-of-the-beast',
     img: './images/shadow.jpg',
    },
    {
     name: 'simcity',
     img: './images/simcity.jpg',
    }
]

let gameGrid = cards.concat(cards)
gameGrid.sort(() => 0.5 - Math.random())

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1000;

gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name

    const front = document.createElement('div')
    front.classList.add('front')
    
    const back = document.createElement('div')
    back.classList.add('back')
    back.style.backgroundImage = `url(${item.img})`

    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
})

const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match')
  })
}

const resetGuesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.remove('selected')
  })
}

grid.addEventListener('click', function(event) {

    let clicked = event.target

    if (clicked.nodeName === 'SECTION'|| clicked === previousTarget) {
        return
      }

    if (count < 2) {
      count++
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name
        clicked.parentNode.classList.add('selected')
      } else {
        secondGuess = clicked.parentNode.dataset.name
        clicked.parentNode.classList.add('selected')
      }
      if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay)
          setTimeout(resetGuesses, delay)
        } else {
          setTimeout(resetGuesses, delay)
        }
      }
      previousTarget = clicked;
  }}
)


