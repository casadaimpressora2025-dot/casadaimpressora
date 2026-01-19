import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLTYDj8E40K51GyXx0c7qGpnM0lNPAMA",
  authDomain: "agendamento-casa.firebaseapp.com",
  projectId: "agendamento-casa",
  storageBucket: "agendamento-casa.appspot.com",
  messagingSenderId: "661265169806",
  appId: "1:661265169806:web:827e5ac97441f2dc29f8df"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
