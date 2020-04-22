let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");

let arrow = document.querySelectorAll(".arrow");

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("closeX")[0];

let slideModal = document.querySelectorAll(".slideModal");
let arrowLeftModal = document.getElementById("arrowLeftModal");
let arrowRightModal = document.getElementById("arrowRightModal");

let current = 0;
let currentModal = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function resetModal() {
    for(let i = 0; i < slideModal.length; i++) {
        slideModal[i].style.display = "none";
    }
}


// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function startSlideModal() {
    resetModal();
    slideModal[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideLeftModal() {
    resetModal();
    slideModal[currentModal - 1].style.display = "block";
    currentModal--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

function slideRightModal() {
    resetModal();
    slideModal[currentModal + 1].style.display = "block";
    currentModal++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowLeftModal.addEventListener("click", function() {
    if(currentModal === 0){
        currentModal = slideModal.length;
    }
    slideLeftModal();
})

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

arrowRightModal.addEventListener("click", function(){
    if(currentModal === slideModal.length - 1) {
        currentModal = -1;
    }
    slideRightModal();
});

document.onkeyup = function(e) {
    //Left Key
    if (event.keyCode == 37) {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
        //Right Key
    } else if (event.keyCode == 39) {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    }
}

document.body.onkeyup = function(e){
    if(event.keyCode == 37) {
        if(currentModal === 0){
            currentModal = slideModal.length;
        }
        slideLeftModal();
    } else if (event.keyCode == 39) {
        if(currentModal === slideModal.length - 1) {
            currentModal = -1;
        }
        slideRightModal();
    }
}

const image = document.getElementsByClassName("image");
for(let i = 0; i < image.length; i++){
    image[i].addEventListener('click', openModal);
}

function openModal() {
    modal.style.display = "block";
    startSlideModal();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.width= "auto";     
}
startSlide();

