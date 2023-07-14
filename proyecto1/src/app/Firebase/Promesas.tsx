import { Persona } from "../Interfaces";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./Conexion";

export const registrarPersona = async (p:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), p);
}