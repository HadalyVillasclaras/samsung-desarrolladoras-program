export class Telefono {
  tipo: string;
  numero: number;

  constructor(tipo: string, numero: number) {
    this.tipo = tipo;
    this.numero = numero;
  }

   // Getters
  getTipo(): string {
    return this.tipo;
  }

  getNumero(): number {
      return this.numero;
  }

  // Setters
  setTipo(tipo: string) {
      this.tipo = tipo;
  }

  setNumero(numero: number) {
      this.numero = numero;
  }
}
