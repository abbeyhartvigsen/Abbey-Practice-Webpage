// var request = new XMLHttpRequest ()

// request.open('GET', "https://swapi.co/api/planets/1/", true)

// request.onload = function () {
// }


// request.send ()

//is it fine if var request, request.open, request.onload, request.send is commented out?

//Is var request, request.open, request.onload, request.send right?

// import { films } from './films.js'
// import { people } from './people.js'
// import {planets} from './planets.js'

// const intro = document.querySelector('.intro')

// films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

// films.forEach(film => {
//     let tile = document.createElement('div')
    // does tile need to be changed to title?

  //   let titleElement = document.createElement('h1')
  // tile.appendChild(titleElement)
  // does tile need to be changed to title?
  // titleElement.textContent = film.title

  // let crawlElement = document.createElement('div')
  // tile.appendChild(crawlElement)
  // does tile need to be changed to title?
//   crawlElement.textContent = film.opening_crawl

//   intro.appendChild(tile)
// })

// const allHomeworlds = people.map(person => {
//   let foundWorld = planets.find (planet => {
//     return planet.url === person.homeworld
//   })
//   return {
//     name : person.name,
//     home: foundWorld.name
//   }
// })

// console.log(allHomeworlds)

// const mainContainer = document.createElement('div')
// mainContainer.className='container'

// allHomeworlds.forEach((person) => {
//   let personElement = document.createElement('div')
//   personDiv.classnameName = 'box'
//   let planetElement = document.createElement('p')

//   personElement.className = 'box'
//   personElement.textContent = person.name
//   planetElement.textContent = person.home

//   personElement.appendChild(planetElement)
//   mainContainer.appendChild(personElement)
// })

//do I put mainContainer in the card flip for loop??

// document.body.appendChild(mainContainer)
// let filmCharacters = films.filter(newHope => newHope.title == "A New Hope")
// console.log(filmCharacters)

// let char = 

// console.log(char)



// people.filter((currentValue, index, arr), thisValue)
// let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
// console.log(peopleArray)

// peopleArray.forEach(peopleArray =>{
//   let players =document.createElement('div')

//   let players = document.createElement ('h1')
//   players.appendChild
//   console.log(peopleArray)
// } )

// let foo = document.querySelector('.title')
//is this right?
// let bar= document.querySelector('.crawl')
//is this right?
// check both above lines
// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl
// check both above lines

// var peopleArray = peopleArray.filter(callback(element[, index[, array]])[, thisArg])
// let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
// console.log(peopleArray)

// try map people through films 
// var new_array = arr.map => (peopleArray) {
//   Return element for new_array
// }[, thisArg])

// peopleArray.map(element => {
//   return peopleArray.length("https://swapi.co/api/films/2/");
// }

// let mainContainer=document.querySelector('.container')
// const peopleArray = people.map((people) => {
//   let newPeopleArray = document.createElement('.div')
//   newPeopleArray.textContent = people
// })

// return peopleArray.slice("https://swapi.co/api/films/2/") 

// console.log(peopleArray)
//why is this greyed out?

// peopleArray.forEach(people =>

//   var obj = {"options": {"1": "All locations", "2": "Egypt", "3": "El Alamein", "4": "Marsa matrouh", "5": "Sharm el sheikh "}}

// for(var item in obj.options) {
//   console.log(obj.options[item]);
// }
  
// })
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  console.log("click")
});
const cont = document.querySelector('.container')
console.log(cont)
//flip cards

// insert 
//does this need to be here?

for (let i = 0; i < 5; i++) {

    ///make cards here add css and the event listener to each card
    // let mainContainer = document.createElement('div')
    // mainContainer (function() {
      //is this right?
    console.log("loop")
    let cardCont = document.createElement('div')//create DOM element
    cardCont.addEventListener( 'click', function() {
      cardCont.classList.toggle('is-flipped');
      console.log("click")
    
  });
    
    //is this right?
    cardCont.className = "card"//create classname
    //is this right?
    // cardCont.innerHTML = "card"//filler
    //is filler a JS thing or is it just an empty thing?
    cont.appendChild(cardCont)//put element inside the container and in theet HTML

    let front = document.createElement('div')
    let back = document.createElement('div')
    front.textContent = "front"
    back.textContent = "back"

    front.className = 'card__face card__face--front'
    back.className = 'card__face card__face--back'

    cardCont.appendChild(front)
    cardCont.appendChild(back)




}

//The following is my main.js from personal portfolio in DGM 1600:

// import { films } from './films.js'
//  import { people } from './people.js'
//  import {planets} from './planets.js'
//should I add another api too?
//should I put swpeople.js in this file?

// const intro = document.querySelector('.intro')

// films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

// films.forEach(film => {
//     let tile = document.createElement('div')
//     does tile need to be changed to title?

//     let titleElement = document.createElement('h1')
//   tile.appendChild(titleElement)
//   does tile need to be changed to title?
//   titleElement.textContent = film.title

//   let crawlElement = document.createElement('div')
//   tile.appendChild(crawlElement)
//   does tile need to be changed to title?
//   crawlElement.textContent = film.opening_crawl

//   intro.appendChild(tile)
// })

// const allHomeworlds = people.map(person => {
//   let foundWorld = planets.find (planet => {
//     return planet.url === person.homeworld
//   })
//   return {
//     name : person.name,
//     home: foundWorld.name
//   }
// })

// console.log(allHomeworlds)

// const mainContainer = document.createElement('div')
// mainContainer.className='container'

// allHomeworlds.forEach((person) => {
//   let personElement = document.createElement('div')
//   personDiv.classnameName = 'box'
//   let planetElement = document.createElement('p')

//   personElement.className = 'box'
//   personElement.textContent = person.name
//   planetElement.textContent = person.home

//   personElement.appendChild(planetElement)
//   mainContainer.appendChild(personElement)
// })

// document.body.appendChild(mainContainer)
// let filmCharacters = films.filter(newHope => newHope.title == "A New Hope")
// console.log(filmCharacters)

// let char = 

// console.log(char)



// people.filter((currentValue, index, arr), thisValue)
// let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
// console.log(peopleArray)

// peopleArray.forEach(peopleArray =>{
//   let players =document.createElement('div')

//   let players = document.createElement ('h1')
//   players.appendChild
//   console.log(peopleArray)
// } )

// let foo = document.querySelector('.title')
// let bar= document.querySelector('.crawl')
//check both above lines
// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl
//check both above lines

// var peopleArray = peopleArray.filter(callback(element[, index[, array]])[, thisArg])
// let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
// console.log(peopleArray)

// try map people through films 
// var new_array = arr.map => (peopleArray) {
//   Return element for new_array
// }[, thisArg])

// peopleArray.map(element => {
//   return peopleArray.length("https://swapi.co/api/films/2/");
// }

// let mainContainer=document.querySelector('.container')
// const peopleArray = people.map((people) => {
//   let newPeopleArray = document.createElement('.div')
//   newPeopleArray.textContent = people
// })

// return peopleArray.slice("https://swapi.co/api/films/2/") 

// console.log(peopleArray)

// peopleArray.forEach(people =>
  
// })

// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   saysLegs: function() {
//     return "This dog has " + this.numLegs + " legs.";
//     }
// };
// console.log(dog.saysLegs())

//End of DGM 1600  personal portfolio
// let cardTransitionTime = 500;

// let $card = $('.js-card')
// let switching = false

// $('#btn').click(flipCard)

// function flipCard () {
//    if (switching) {
//       return false
//    }
//    switching = true
   
//    $card.toggleClass('is-switched')
//    window.setTimeout(function () {
//       $card.children().children().toggleClass('is-active')
//       switching = false
//    }, cardTransitionTime / 2)
// }