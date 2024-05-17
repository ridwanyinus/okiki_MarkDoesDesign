document.querySelector(".hamburger-button").addEventListener("click", function () {
  document.querySelector(".nav_links").style.display = document.querySelector(".nav_links").style.display == "none" ? "block" : "none";
});



let currentIndex = 0;
const intervalTime = 1500; 

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    
    items[currentIndex].classList.remove('active');
    
    document.querySelectorAll('.dot')[currentIndex].classList.remove('active');

   
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

   
    items[currentIndex].classList.add('active');
   
    document.querySelectorAll('.dot')[currentIndex].classList.add('active');

   
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;

    trackCurrentItem(currentIndex);
}

function startAutoCarousel() {
    setInterval(() => {
        moveCarousel(1); 
    }, intervalTime);
}


function trackCurrentItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    console.log(`Current item: ${items[index].textContent}`);
}


function currentSlide(index) {
    moveCarousel(index - currentIndex);
}


startAutoCarousel();
