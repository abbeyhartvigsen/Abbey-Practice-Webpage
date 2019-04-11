var card = document.querySelector('.card');
card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
  console.log("click")
});
const cont = document.querySelector('.container')
console.log(cont)

for (let i = 0; i < 5; i++) {
  console.log("loop")
  let cardCont = document.createElement('div')//create DOM element
  cardCont.addEventListener('click', function () {
    cardCont.classList.toggle('is-flipped');
    console.log("click")

  });

  cardCont.className = "card"//create classname
  
  cont.appendChild(cardCont)//put element inside the container and in theet HTML

  let front = document.createElement('div')
  let back = document.createElement('div')
  front.textContent = "Front"
  back.textContent = "Front"

  front.className = 'card__face card__face--front'
  back.className = 'card__face card__face--back'

  cardCont.appendChild(front)
  cardCont.appendChild(back)




}

