// Promesas.tsx
import { Persona, PersonaConId } from "../Interfaces";
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./Conexion";

export const registrarPersona = async (p: Persona) => {
  const docRef = await addDoc(collection(db, "personas"), p);
}

export const obtenerPersonas = async () => {
  var listado: PersonaConId[] = [];
  const querySnapshot = await getDocs(collection(db, "personas"));
  querySnapshot.forEach((doc) => {
    var p: PersonaConId = {
      idPersona: doc.id,
      nombre: doc.data().nombre,
      correo: doc.data().correo,
      telefono: doc.data().telefono,
      genero: doc.data().genero,
      fechaNacimiento: doc.data().fechaNacimiento,
      ciudad: doc.data().ciudad,
      direccion: doc.data().direccion,
      codigoPostal: doc.data().codigoPostal,
    };
    listado.push(p);
  });
  return listado;
}

export const actualizarPersona = async (idPersona: string, p: Persona) => {
  const personaRef = doc(db, "personas", idPersona);
  await setDoc(personaRef, p);
  }

  export const eliminarPersona = async (idPersona: string) => {
    const personaRef = doc(db, "personas", idPersona);
    await deleteDoc(personaRef);
  };
