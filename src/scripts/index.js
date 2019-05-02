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

gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card)
})

const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match')
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
        firstGuess = clicked.dataset.name
        clicked.classList.add('selected')
      } else {
        secondGuess = clicked.dataset.name
        clicked.classList.add('selected')
      }
      if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
          match()
        }
      }
      previousTarget = clicked;
  }}
)


