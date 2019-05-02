// all the card images in an array

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
// duplicate all the cards and randomize them 
let gameGrid = cards.concat(cards)
gameGrid.sort(() => 0.5 - Math.random())

// taking the root div and creating the basic structure of divs

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// setting useful variables
let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1000;

//creating the cards and their fronts and backs

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

// adding the match css for when there is a match
const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match')
  })
}

// resetting the counter and removing the selected css 

const resetGuesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.remove('selected')
  })
}

// the click function!

grid.addEventListener('click', function(event) {

    let clicked = event.target

    // the click should only work on the selected divs, not the whole section and not on the same div as the first click
    if (clicked.nodeName === 'SECTION'|| clicked === previousTarget) {
        return
      }

    //  the click counts to two
    if (count < 2) {
      count++
      if (count === 1) {
        // the first guess is assigned to the first click and given the selected css
        firstGuess = clicked.parentNode.dataset.name
        clicked.parentNode.classList.add('selected')
      } else {
        // the second guess is assigned to the second click and given the selected css
        secondGuess = clicked.parentNode.dataset.name
        clicked.parentNode.classList.add('selected')
      }
      // if the guesses aren't empty 
      if (firstGuess !== '' && secondGuess !== '') {
        // and they match each other
        if (firstGuess === secondGuess) {
          // the match function will run and there will be a delay of 1 second 
          setTimeout(match, delay)
          // and the guess counter will be reset
          setTimeout(resetGuesses, delay)
        } else {
          // otherwise the guess counter will be reset and a delay
          setTimeout(resetGuesses, delay)
        }
      }
      // setting the previous target as clicked
      previousTarget = clicked;
  }}
)


