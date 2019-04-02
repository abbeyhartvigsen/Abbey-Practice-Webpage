var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  console.log("click")
});
const cont = document.querySelector('.container')
console.log(cont)


for (let i = 0; i < 5; i++) {

    ///make cards here add css and the event listener to each card
    console.log("loop")
    let cardCont = document.createElement('div')//create DOM element
    cardCont.className = "card"//create classname
    cardCont.innerHTML = "card"//filler
    cont.appendChild(cardCont)//put element inside the container and in the HTML


}


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