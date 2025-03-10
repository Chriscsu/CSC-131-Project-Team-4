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