// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector("#modal")
modal.className = "hidden"
const matches = document.querySelectorAll("li.like")
matches.forEach(heart => {
  heart.addEventListener("click", () => {
  mimicServerCall ()
  .then(function (response) {
  console.log(response)
  console.log(heart.childNodes[1])
  
  if (heart.childNodes[1].textContent === FULL_HEART) {
    (heart.childNodes[1].textContent = EMPTY_HEART)
  } 
  else {
    heart.childNodes[1].classList.add("activated-heart")
  heart.childNodes[1].textContent = FULL_HEART
  }

  })
  .catch(function (error) {
    alert("Random server error. Try again.")
    modal.classList.remove("hidden")
    setTimeout((hidden)=> {modal.classList.add("hidden")}, 3000 )
  })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
