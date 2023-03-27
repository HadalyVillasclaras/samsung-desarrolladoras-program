export class Direccion {
  calle: string;
  numero: number;
  piso: number;
  letra: string;
  codigoPostal: number;
  poblacion: string;
  provincia: string;

  constructor(
    calle: string, 
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: number,
    poblacion: string,
    provincia: string
  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }

  // Getters
  getCalle(): string {
    return this.calle;
  }

  getNumero(): number {
      return this.numero;
  }

  getPiso(): number {
      return this.piso;
  }

  getLetra(): string {
      return this.letra;
  }

  getCodigoPostal(): number {
      return this.codigoPostal;
  }

  getPoblacion(): string {
      return this.poblacion;
  }

  getProvincia(): string {
      return this.provincia;
  }

  // Setters
  setCalle(calle: string) {
      this.calle = calle;
  }

  setNumero(numero: number) {
      this.numero = numero;
  }

  setPiso(piso: number) {
      this.piso = piso;
  }

  setLetra(letra: string) {
      this.letra = letra;
  }

  setCodigoPostal(codigoPostal: number) {
      this.codigoPostal = codigoPostal;
  }

  setPoblacion(poblacion: string) {
      this.poblacion = poblacion;
  }

  setProvincia(provincia: string) {
      this.provincia = provincia;
  }
}
