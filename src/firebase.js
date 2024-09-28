import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGHhxt6tdJcyHOeOlarvfp8NnwVRP_gJk",
  authDomain: "npcfriends-ce939.firebaseapp.com",
  projectId: "npcfriends-ce939",
  storageBucket: "npcfriends-ce939.appspot.com",
  messagingSenderId: "1067351972835",
  appId: "1:1067351972835:web:83375da5c3c6025b8eded6",
  measurementId: "G-HLNVPW3BG3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);