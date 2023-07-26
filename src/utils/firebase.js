// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, query, where, addDoc, getDoc, doc} from "firebase/firestore";

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

const getGame = async (id) => {
  const db = getFirestore();
  const itemRef = doc(db, "games", id);
  const snapshot = await getDoc(itemRef);
  return { id: snapshot.id, ...snapshot.data() };
}

const getGames = async () => {
  const db = getFirestore(); //Referencia mi base de datos, consulto
  const docRef = collection(db, "games");

  const snapshot = await getDocs(docRef);

  return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}

const getCategories = async () => {
  try{
    const db = getFirestore();
    const categoriesSnapshot = await getDocs(collection(db, 'categories'));
    const categoriesData =  categoriesSnapshot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    }));
    return categoriesData;
  } catch(error){
    console.error('Error fetching categories:', error);
    throw error;
  }
}

const getGamesByCategory = async (category) => {
  try{
    const db = getFirestore();
    const q = query(collection(db, 'games'), where('categories', 'array-contains', category));
    const categoriesSnapshot = await getDocs(q);
    const categoriesData =  categoriesSnapshot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    }));
    return categoriesData;
  } catch(error){
    console.error('Error fetching categories:', error);
    throw error;
  }
}

const createOrder = async (orderData) => {
  try {
    const db = getFirestore();
    const orderRef = await addDoc(collection(db, 'orders'), orderData);
    const orderId = orderRef.id;
    return orderId;
  } catch(error) {
    console.error('Error creating order', error);
    throw error;
  }
}

export {getGame, getGames, getCategories, getGamesByCategory, createOrder};
