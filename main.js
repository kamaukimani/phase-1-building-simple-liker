// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");


const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // If the heart is empty, fill it
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          // If the heart is full, empty it
          heart.innerText = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        // Show the error modal with the message
        modal.classList.remove("hidden");
        modalMessage.innerText = error;

        // Hide the modal after 3 seconds
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});

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
