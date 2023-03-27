import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona{
  nombre:string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: Date;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string[];

  constructor(
    nombre: string, 
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string[]
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni; 
    this.cumpleanos = cumpleanos; 
    this.colorFavorito = colorFavorito; 
    this.sexo = sexo; 
    this.direcciones = direcciones; 
    this.mails = mails; 
    this.telefonos = telefonos; 
    this.notas = notas;
  }


  //Getters
  getNombre(): string {
    return this.nombre;
  }

  getApellidos(): string {
      return this.apellidos;
  }

  getEdad(): number {
      return this.edad;
  }

  getDni(): string {
      return this.dni;
  }

  getCumpleanos(): Date {
      return this.cumpleanos;
  }

  getColorFavorito(): string {
      return this.colorFavorito;
  }

  getSexo(): string {
      return this.sexo;
  }

  getDirecciones(): Direccion[] {
      return this.direcciones;
  }

  getMails(): Mail[] {
      return this.mails;
  }

  getTelefonos(): Telefono[] {
      return this.telefonos;
  }

  getNotas(): string[] {
      return this.notas;
  }

  // Setters
  setNombre(nombre: string) {
      this.nombre = nombre;
  }

  setApellidos(apellidos: string) {
      this.apellidos = apellidos;
  }

  setEdad(edad: number) {
      this.edad = edad;
  }

  setDni(dni: string) {
      this.dni = dni;
  }

  setCumpleanos(cumpleanos: Date) {
      this.cumpleanos = cumpleanos;
  }

  setColorFavorito(colorFavorito: string) {
      this.colorFavorito = colorFavorito;
  }

  setSexo(sexo: string) {
      this.sexo = sexo;
  }

  setDirecciones(direcciones: Direccion[]) {
      this.direcciones = direcciones;
  }

  setMails(mails: Mail[]) {
      this.mails = mails;
  }

  setTelefonos(telefonos: Telefono[]) {
      this.telefonos = telefonos;
  }

  setNotas(notas: string[]) {
      this.notas = notas;
  }
}