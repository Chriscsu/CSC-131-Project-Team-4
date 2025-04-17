
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi4FZpvDGUcBvXCE25tAyRgusMSLFnEaE",
  authDomain: "playground-218f9.firebaseapp.com",
  databaseURL: "https://playground-218f9-default-rtdb.firebaseio.com",
  projectId: "playground-218f9",
  storageBucket: "playground-218f9.firebasestorage.app",
  messagingSenderId: "571794642303",
  appId: "1:571794642303:web:e3193939926c8adeb2b64a"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

let submitBtn = document.getElementById("submitBtn")


submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    
    alert("works")
})

console.log("hello")