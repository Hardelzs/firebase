// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFKHHnMbkESekIbqfOavzQD3elCQq7pz4",
    authDomain: "haardelz-app.firebaseapp.com",
    databaseURL: "https://haardelz-app-default-rtdb.firebaseio.com",
    projectId: "haardelz-app",
    storageBucket: "haardelz-app.appspot.com",
    messagingSenderId: "35373870516",
    appId: "1:35373870516:web:bb8e623353400085f556e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

document.getElementById('signup').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('User created!');
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});
