
const firebaseConfig = {
  apiKey: "AIzaSyBAkqRZnZGjymdImgXLBYFa9APhN6ohL2k",
  authDomain: "speed-garage-pro.firebaseapp.com",
  projectId: "speed-garage-pro",
  storageBucket: "speed-garage-pro.firebasestorage.app",
  messagingSenderId: "548141487779",
  appId: "1:548141487779:web:abf989fec2416edc41d116"
};

// Initialiser Firebase une seule fois
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Connexion à Firestore
window.garageDb = firebase.firestore();

// Connexion à Authentication
window.garageAuth = firebase.auth();

console.log("Firebase SPEED GARAGE PRO initialisé");

