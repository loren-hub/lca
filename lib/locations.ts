export interface Location {
  name: string;
  province: string;
  slug: string;
}

// Lista de municipios de Madrid y Albacete para SEO Programático
// Esta es una lista inicial con las poblaciones más grandes. 
// Para cubrir TODOS los municipios, añade los 179 de Madrid y 87 de Albacete aquí.
export const locations: Location[] = [
  // Comunidad de Madrid
  { name: 'Madrid', province: 'Madrid', slug: 'madrid' },
  { name: 'Móstoles', province: 'Madrid', slug: 'mostoles' },
  { name: 'Alcalá de Henares', province: 'Madrid', slug: 'alcala-de-henares' },
  { name: 'Fuenlabrada', province: 'Madrid', slug: 'fuenlabrada' },
  { name: 'Leganés', province: 'Madrid', slug: 'leganes' },
  { name: 'Getafe', province: 'Madrid', slug: 'getafe' },
  { name: 'Alcorcón', province: 'Madrid', slug: 'alcorcon' },
  { name: 'Torrejón de Ardoz', province: 'Madrid', slug: 'torrejon-de-ardoz' },
  { name: 'Parla', province: 'Madrid', slug: 'parla' },
  { name: 'Alcobendas', province: 'Madrid', slug: 'alcobendas' },
  { name: 'Las Rozas de Madrid', province: 'Madrid', slug: 'las-rozas-de-madrid' },
  { name: 'San Sebastián de los Reyes', province: 'Madrid', slug: 'san-sebastian-de-los-reyes' },
  { name: 'Pozuelo de Alarcón', province: 'Madrid', slug: 'pozuelo-de-alarcon' },
  { name: 'Rivas-Vaciamadrid', province: 'Madrid', slug: 'rivas-vaciamadrid' },
  { name: 'Coslada', province: 'Madrid', slug: 'coslada' },
  { name: 'Valdemoro', province: 'Madrid', slug: 'valdemoro' },
  { name: 'Majadahonda', province: 'Madrid', slug: 'majadahonda' },
  { name: 'Collado Villalba', province: 'Madrid', slug: 'collado-villalba' },
  { name: 'Aranjuez', province: 'Madrid', slug: 'aranjuez' },
  { name: 'Arganda del Rey', province: 'Madrid', slug: 'arganda-del-rey' },
  { name: 'Boadilla del Monte', province: 'Madrid', slug: 'boadilla-del-monte' },
  { name: 'Pinto', province: 'Madrid', slug: 'pinto' },
  { name: 'Colmenar Viejo', province: 'Madrid', slug: 'colmenar-viejo' },
  { name: 'San Fernando de Henares', province: 'Madrid', slug: 'san-fernando-de-henares' },
  { name: 'Tres Cantos', province: 'Madrid', slug: 'tres-cantos' },

  // Provincia de Albacete
  { name: 'Albacete', province: 'Albacete', slug: 'albacete' },
  { name: 'Hellín', province: 'Albacete', slug: 'hellin' },
  { name: 'Villarrobledo', province: 'Albacete', slug: 'villarrobledo' },
  { name: 'Almansa', province: 'Albacete', slug: 'almansa' },
  { name: 'La Roda', province: 'Albacete', slug: 'la-roda' },
  { name: 'Caudete', province: 'Albacete', slug: 'caudete' },
  { name: 'Tobarra', province: 'Albacete', slug: 'tobarra' },
  { name: 'Tarazona de la Mancha', province: 'Albacete', slug: 'tarazona-de-la-mancha' },
  { name: 'Madrigueras', province: 'Albacete', slug: 'madrigueras' },
  { name: 'Casas-Ibáñez', province: 'Albacete', slug: 'casas-ibanez' },
  { name: 'Chinchilla de Monte-Aragón', province: 'Albacete', slug: 'chinchilla-de-monte-aragon' },
  { name: 'Villamalea', province: 'Albacete', slug: 'villamalea' },
  { name: 'Elche de la Sierra', province: 'Albacete', slug: 'elche-de-la-sierra' },
  { name: 'Munera', province: 'Albacete', slug: 'munera' },
  { name: 'Yeste', province: 'Albacete', slug: 'yeste' }
];

//Agregar más municipios de ser necesario, solo están los más grandes