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
     img: './images/simcity.png',
    }
]

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let gameGrid = cards.concat(cards)

gameGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card)
})
