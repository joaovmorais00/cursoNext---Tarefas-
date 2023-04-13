import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLKNpzM64iI1U6bfVOAekMjqrRUNe4nMU",
  authDomain: "projetotarefasnext.firebaseapp.com",
  projectId: "projetotarefasnext",
  storageBucket: "projetotarefasnext.appspot.com",
  messagingSenderId: "817069469591",
  appId: "1:817069469591:web:a48927972755fdad1b5ed2",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
