// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR_roAJDo7Q4PkQ6XSXiJZMoLgYGqg5ow",
  authDomain: "lucy-gamestore.firebaseapp.com",
  projectId: "lucy-gamestore",
  storageBucket: "lucy-gamestore.appspot.com",
  messagingSenderId: "803111617380",
  appId: "1:803111617380:web:622269afb0a05a41f83071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const getGames = async () => {
  const db = getFirestore(); //Referencia mi base de datos, consulto
  const docRef = collection(db, "games");

  const snapshot = await getDocs(docRef);

  return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}

export default getGames;