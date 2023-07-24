// Interfaces.tsx
export interface Persona {
  nombre: string;
  correo: string;
  telefono: string;
  genero: string;
  fechaNacimiento: string;
  ciudad: string;
  direccion: string;
  codigoPostal: string;
}

export interface PersonaConId extends Persona {
  idPersona: string;
}
