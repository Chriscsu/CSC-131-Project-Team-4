import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://drlgexqbhttgphyvouqh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRybGdleHFiaHR0Z3BoeXZvdXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NTQ2MDcsImV4cCI6MjA2MDQzMDYwN30.J05fM8edOWLRgg69wEvu8_703O-uDN2ZKRz8RFAivHE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function updateAthleteInfo(athlete_id, caption_id, img_id) {
    const figcaption = document.getElementById(caption_id)
    const img = document.getElementById(img_id)
  
    const {data} = await supabase
      .from('athlete')
      .select('*')
      .eq('id', athlete_id)
    
    const athlete = data[0]
  
    figcaption.innerHTML = `${athlete.name}<br>${athlete.sport}<br>${athlete.class}`
    img.src = athlete.profileImg;

}
  
document.addEventListener('DOMContentLoaded', () => {

    updateAthleteInfo(36, 'cap1', 'athlete_img_1') 
    updateAthleteInfo(37, 'cap2', 'athlete_img_2') 
    updateAthleteInfo(38, 'cap3', 'athlete_img_3') 
    updateAthleteInfo(40, 'cap4', 'athlete_img_4') 

    
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
  