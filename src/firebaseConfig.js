  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcSD1M87Dau5fSdFTi4lWbZg_GQLaZwcc",
  authDomain: "vistaliste.firebaseapp.com",
  projectId: "vistaliste",
  storageBucket: "vistaliste.firebasestorage.app",
  messagingSenderId: "442466725851",
  appId: "1:442466725851:web:e183605cdbddfdeb4101fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction pour ajouter une tâche
export async function ajouterTache(titre) {
  try {
    await addDoc(collection(db, "taches"), {
      titre: titre,
      date: new Date()
    });
  } catch (e) {
    console.error("Erreur ajout tâche :", e);
  }
}

// Fonction pour récupérer toutes les tâches
export async function recupererTaches() {
  const snapshot = await getDocs(collection(db, "taches"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
