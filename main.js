// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Craete a Function to toggle the heart
function toggleHeart() {
  const heart = document.getElementById("like-icon");
  console.log("Heart found:", heart); 

  heart.addEventListener("click", function() {
    console.log("Heart clicked:", heart.textContent); 

    if (heart.textContent === '♥') {
      heart.textContent = '♡';
      heart.classList.remove("activated-heart");
      console.log("Heart class after remove:", heart.className); 
    } else {
      mimicServerCall().then(() => {
        heart.textContent = '♥';
        heart.classList.add("activated-heart");
        console.log("Heart class after add:", heart.className); 
      }).catch((error) => {
        console.log("Error:", error); 
        const errorModal = document.getElementById("error-modal");
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = error;
        errorModal.classList.remove("hidden");
        setTimeout(() => {
            errorModal.classList.add("hidden");
        }, 3000); 
      });
    }
  });
}

toggleHeart();

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
