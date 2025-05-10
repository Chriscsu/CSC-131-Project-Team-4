import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://drlgexqbhttgphyvouqh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRybGdleHFiaHR0Z3BoeXZvdXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NTQ2MDcsImV4cCI6MjA2MDQzMDYwN30.J05fM8edOWLRgg69wEvu8_703O-uDN2ZKRz8RFAivHE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function addAthlete() {
    const container = document.getElementById('athlete_container');
    const {data} = await supabase
        .from('athlete')
        .select('*')
        .order('id', { ascending: true });

    data.forEach(athlete => {
    const imgUrl = athlete.profileImg.replace(/\s/g, '');

    const figure = document.createElement('figure');
    figure.style.cursor = 'pointer';
    figure.classList.add('athlete_card');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
   
    img.src = imgUrl;
    figcaption.innerHTML = `${athlete.name}<br>${athlete.sport}<br>${athlete.class}<br>`
    figure.appendChild(img);
    figure.appendChild(figcaption);
    container.appendChild(figure);

    figure.addEventListener('click', () => {
        document.getElementById('athlete_image').src = imgUrl;
        document.getElementById('athlete_name').innerHTML = `<strong>${athlete.name || ''}</strong>`;
        document.getElementById('athlete_school').textContent = `School: ${athlete.school || 'N/A'}`;
        document.getElementById('athlete_weight').textContent = `Weight: ${athlete.weight || 'N/A'} lbs`;
        document.getElementById('athlete_class').textContent = `Class: ${athlete.class || 'N/A'}`;
        document.getElementById('athlete_height').textContent = `Height: ${athlete.height || 'N/A'}`;
        document.getElementById('athlete_interests').textContent = `Interests: ${athlete.interests || 'N/A'}`;
        document.getElementById('athlete_sport').textContent = `Sport: ${athlete.sport || 'N/A'}`;
        document.getElementById('athlete_socials').textContent = `Social: ${athlete.socialMedia || 'N/A'}`;
        document.getElementById('athlete_stats').innerHTML = `<strong>Stats:</strong><br>${addNewLine(athlete.stats)}`;
        document.getElementById('athlete_summary').innerHTML = `<strong>Summary:</strong><br>${addNewLine(athlete.summary)}`;        
        document.getElementById('athlete_pop_up').style.display = 'flex';
        document.body.classList.add('athlete_open');
    });
});
}
function addNewLine(text) {
    if (!text) return '';
    return text.replace(/\n/g, '<br><br>');
}

  
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('athlete_container')) {
        addAthlete();
    
    document.getElementById('close_athlete').addEventListener('click', () => {
        document.getElementById('athlete_pop_up').style.display = 'none';
        document.body.classList.remove('athlete_open');
    });

    document.getElementById('athlete_pop_up').addEventListener('click', (clck) => {
        if (clck.target === clck.currentTarget) {
            document.getElementById('athlete_pop_up').style.display = 'none';
            document.body.classList.remove('athlete_open');
        }
    });
}
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

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevButton');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => scrollSlider(1));
        prevBtn.addEventListener('click', () => scrollSlider(-1));
    }
});

function clickAnswer(item) {
  item.classList.toggle('open');
}
window.clickAnswer = clickAnswer;

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


function scrollSlider(direction) {
    const slider = document.getElementById('cardSlider');
  
    // Get the width of one card (dynamically)
    const getCardWidth = () => {
      const firstCard = slider.querySelector('.flex-none');
      return firstCard ? firstCard.offsetWidth : 0;
    };
  
    const cardWidth = getCardWidth(); 
    if (cardWidth === 0) return;  
  
    slider.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }
  window.scrollSlider = scrollSlider;

  