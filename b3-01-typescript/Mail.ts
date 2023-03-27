export class Mail {
  tipo: string;
  direccion: string;

  constructor(tipo: string, direccion: string) {
    this.tipo = tipo;
    this.direccion = direccion;
  }

   // Getters
  getTipo(): string {
    return this.tipo;
  }

  getDireccion(): string {
      return this.direccion;
  }

  // Setters
  setTipo(tipo: string) {
      this.tipo = tipo;
  }

  setDireccion(direccion: string) {
      this.direccion = direccion;
  }
}
