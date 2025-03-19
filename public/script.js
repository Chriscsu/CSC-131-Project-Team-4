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
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAi4FZpvDGUcBvXCE25tAyRgusMSLFnEaE",
  authDomain: "playground-218f9.firebaseapp.com",
  databaseURL: "https://playground-218f9-default-rtdb.firebaseio.com",
  projectId: "playground-218f9",
  storageBucket: "playground-218f9.firebasestorage.app",
  messagingSenderId: "571794642303",
  appId: "1:571794642303:web:e3193939926c8adeb2b64a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

connectAuthEmulator(auth, 'https://localhost:9099');
const email = document.getElementById('email').value
const password = document.getElementById('password').value
console.log(email, password)

const loginEmailPassword = async () => {
    const loginEmail = email.value
    const loginPassword = password.value
    const userCred = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCred.user)
}
