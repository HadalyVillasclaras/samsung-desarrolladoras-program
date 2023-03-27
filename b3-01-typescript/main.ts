import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Persona } from "./Persona";
import { Telefono } from "./Telefono";


// Direcciones
const direccion1 = new Direccion(
  'Calle Sol',
  1,
  1,
  'A',
  20123,
  'Torrox',
  'Malaga'
  );

const direccion2 = new Direccion(
  'Calle Luna',
  2,
  2,
  'B',
  20124,
  'Motril',
  'Granada'
);

const direccion3 = new Direccion(
  'Calle Mar',
  3,
  5,
  'C',
  20125,
  'Nerja',
  'Malaga'
);

// Mails
const mail1 = new Mail(
  'a',
  'hola@maila.com'
);
const mail2 = new Mail(
  'b',
  'hola@mailb.com'
);

const mail3 = new Mail(
  'c',
  'hola@mailc.com'
);

// Teléfonos
const telefono1 = new Telefono(
  'b',
  618374930
);
const telefono2 = new Telefono(
  'a',
  603940503
);
const telefono3 = new Telefono(
  'b',
  682734573
);

// Personas
const persona1 = new Persona(
  "Juan",
  "Pérez",
  30,
  "12345678A",
  new Date(1993, 5, 20),
  "azul",
  "hombre",
  [direccion1],
  [mail1],
  [telefono1],
  ["nota1", "nota2"]
);

const persona2 = new Persona(
  "Ana",
  "Rodriguez",
  25,
  "23456789B",
  new Date(1990, 4, 15),
  "verde",
  "mujer",
  [direccion2],
  [mail2],
  [telefono2],
  ["nota1"]
);

const persona3 = new Persona(
  "Pedro",
  "Martín",
  40,
  "34567890C",
  new Date(1983, 10, 10),
  "rojo",
  "hombre",
  [direccion3],
  [mail3],
  [telefono3],
  ["nota1", "nota2", "nota3"]
);


// Mostrar personas
function mostrarPersona(persona: Persona) {
  console.log("Nombre:", persona.getNombre());
  console.log("Apellidos:", persona.getApellidos());
  console.log("Edad:", persona.getEdad());
  console.log("DNI:", persona.getDni());
  console.log("Cumpleaños:", persona.getCumpleanos());
  console.log("Color favorito:", persona.getColorFavorito());
  console.log("Sexo:", persona.getSexo());
}

console.log("Persona 1:");
mostrarPersona(persona1);
console.log("Persona 2:");
mostrarPersona(persona2);
console.log("Persona 3:");
mostrarPersona(persona3);



// Ejercicio 2
// Función para buscar una persona por DNI
function buscarPersonaPorDNI(personas: Persona[], dni: string): Persona | null {
  for (const persona of personas) {
    if (persona.getDni() === dni) {
      return persona;
    }
  }
  return null;
}

// Función para añadir una dirección, mail y teléfono a una persona
function modificarPersona(
  persona: Persona, 
  nuevaDireccion: Direccion, 
  nuevoMail: Mail, 
  nuevoTelefono: Telefono
  ) {
  const direcciones = persona.getDirecciones();
  direcciones.push(nuevaDireccion);
  persona.setDirecciones(direcciones);

  const mails = persona.getMails();
  mails.push(nuevoMail);
  persona.setMails(mails);

  const telefonos = persona.getTelefonos();
  telefonos.push(nuevoTelefono);
  persona.setTelefonos(telefonos);
}

// Buscar persona por DNI
const dni = "12345678A";
const personaEncontrada = buscarPersonaPorDNI([persona1, persona2, persona3], dni);

if (personaEncontrada) {
  // Crear nueva dirección, mail y teléfono
  const nuevaDireccion = new Direccion(
    'Calle Nube',
    33,
    4,
    'A',
    20129,
    'Nerja',
    'Malaga'
  );
  const nuevoMail = new Mail('d', 'hola@maild.com');
  const nuevoTelefono = new Telefono('a', 618992347);

  // Modificar la persona encontrada
  modificarPersona(personaEncontrada, nuevaDireccion, nuevoMail, nuevoTelefono);

  console.log("Persona modificada:");
  mostrarPersona(personaEncontrada);
} else {
  console.log("No se encontró una persona con el DNI proporcionado.");
}