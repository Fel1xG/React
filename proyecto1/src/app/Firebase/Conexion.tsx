// Importar las funciones y objetos necesarios desde las bibliotecas de Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Credenciales";
import { getFirestore } from "firebase/firestore";

// Variable para rastrear si Firebase ya ha sido inicializado
let firebaseInitialized = false;

// Inicializa la app de Firebase si no ha sido inicializada previamente
if (typeof window !== 'undefined' && !firebaseInitialized) {
  initializeApp(firebaseConfig);
  firebaseInitialized = true; // Marcar Firebase como inicializado
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
