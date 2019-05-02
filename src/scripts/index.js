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

const game = document.getElementById('game');

let count = 0;

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let gameGrid = cards.concat(cards)
gameGrid.sort(() => 0.5 - Math.random())

gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card)
})

grid.addEventListener('click', function(event) {

    let clicked = event.target

    if (clicked.nodeName === 'SECTION') {
        return
      }

    if (count < 2) {
      count++
    clicked.classList.add('selected')
  }}
)


