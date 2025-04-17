document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelector('.hovercolor');
    if (menu && menuLinks) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !menuLinks.contains(event.target)) {
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
            }
        });
    }
});

function clickAnswer(item) {
    let answer = item.querySelector(".faq_answer");
    let arrow = item.querySelector(".arrow");
    let isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";
    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(90deg)";
}

document.querySelectorAll('.footer_main p, .footer_additional p, .footer_pcm p').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('active');
    });
  });
let submitBtn = document.getElementById("submitBtn")
submitBtn.attachEvent('onclick', myFunctionReference);
const myFunctionReference = function(){
    alert("hello")
}

console.log("hello")

function scrollSlider(direction) {
    const slider = document.getElementById('cardSlider');
  
    // Get the width of one card (dynamically)
    const getCardWidth = () => {
      const firstCard = slider.querySelector('.flex-none');
      return firstCard ? firstCard.offsetWidth : 0;
    };
  
    const cardWidth = getCardWidth(); // Get the card width dynamically
    if (cardWidth === 0) return;  // If no cards, don't do anything
  
    // Scroll in the specified direction
    slider.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }
  