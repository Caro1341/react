const productos=[
    {
      "id": 1,
      "nombre": "Las aventuras de Tom Sawyer",
      "imagen": "/img/lasAventurasdeTom.jpg",
      "categoria": "libros",
      "precio": 1599,
      "edad_minima": 10,
      "cantidad":1,
      "descripcion": "Libro sobre las aventuras de Tom Sawyer en el río Mississippi."
    },
  
    {
      "id": 2,
      "categoria": "juguetes",
      "nombre": "Set de Pintura",
      "imagen": "/img/setPintura.jpg",
      "precio": 1900,
      "cantidad":1,
      "edad_minima": 4,
      "descripcion": "Set de pintura con acuarelas, lápices de colores y crayones de la marca Crayola. Incluye cuaderno de dibujo y pinceles"
    },
    {
      "id": 3,
      "categoria": "juguetes",
      "nombre": "Caja de bloques de construcción",
      "imagen": "/img/bloquesdeConstruccion.jpg",
      "precio": 2399,
      "cantidad":1,
      "edad_minima": 3,
      "descripcion": "Conjunto de 100 bloques de construcción de diferentes formas y colores para estimular la creatividad y la habilidad manual de los niños."
    },
    {
      "id": 4,
      "categoria": "juguetes",
      "nombre": "Juego de mesa de estrategia",
      "imagen": "/img/juegoEstrategia.jpg",
      "precio": 1599,
      "cantidad":1,
      "edad_minima": 8,
      "descripcion": "Juego de mesa de estrategia para dos jugadores en el que se deben conquistar territorios y vencer al oponente. Incluye tablero, fichas y reglas del juego."
    },
    {
      "id": 5,
      "categoria": "juguetes",
      "nombre": "Muñeca de peluche",
      "imagen": "/img/muniecaPeluche.jpg",
      "precio": 1299,
      "cantidad":1,
      "edad_minima": 2,
      "descripcion": "Muñeca de peluche suave y tierna con vestido rosa y lazos en el pelo. Perfecta para abrazar y jugar."
    },
    {
      "id": 6,
      "categoria": "juguetes",
      "nombre": "Muñeca Baby Alive",
      "imagen": "/img/muniecaAlive.jpg",
      "precio": 2599,
      "cantidad":1,
      "edad_minima": 3,
      "descripcion": "Muñeca bebé con funciones de alimentación y cambio de pañales. Incluye accesorios como biberón y pañales, y emite sonidos de llanto y risa."
    },
    {
      "id": 7,
      "categoria": "juguetes",
      "nombre": "Coche de carreras a control remoto",
      "imagen": "/img/coche.jpg",
      "precio": 3990,
      "cantidad":1,
      "edad_minima": 6,
      "descripcion": "Coche de carreras a control remoto con velocidad ajustable y luces LED. Incluye control remoto y batería recargable."
    },
  
    {
      "id": 8,
      "categoria": "libros",
      "nombre": "Resuelve el misterio",
      "imagen": "/img/resuelveElMisterio.jpg",
      "precio": 1099,
      "cantidad":1,
      "edad_minima": 8,
      "descripcion": "Un cuento donde el lector debe ayudar a Carlos y a sus amigos a reunir las pistas para salvar la agencia."
    },
    {
      "id": 9,
      "categoria": "libros",
      "nombre": "Donde viven los monstruos",
      "imagen": "/img/dondeVivenLosMonstruos.jpg",
      "precio": 1199,
      "cantidad":1,
      "edad_minima": 5,
      "descripcion": "Un libro ilustrado sobre un niño que escapa a un mundo imaginario lleno de monstruos después de una pelea con su madre."
    },
    {
      "id": 10,
      "categoria": "libros",
      "nombre": "El gran libro de las emociones",
      "imagen": "/img/El-gran-libro-de-las-emociones.jpg",
      "precio": 999,
      "cantidad":1,
      "edad_minima": 10,
      "descripcion": "El gran libro de las emociones reúne 30 cuentos y cada uno muestra una emoción diferente."
    },
    {
      "id": 11,
      "categoria": "libros",
      "nombre": "La oruga impaciente",
      "imagen": "/img/la-oruga-impaciente.jpg",
      "precio": 899,
      "cantidad":1,
      "edad_minima": 7,
      "descripcion": "La oruga más impaciente del bosque es esta y el lector se partirá de risa leyendo y descubriendo que su falta de paciencia le llevará a no poder esperar para convertirse en el sueño de toda oruga... ¡convertirse en mariposa!"
    },
    {
      "id": 12,
      "categoria": "juguetes",
      "nombre": "Lego City",
      "imagen": "/img/legoCity.jpg",
      "precio": 4999,
      "cantidad":1,
      "edad_minima": 5,
      "descripcion": "Set de construcción de una estación de bomberos de la serie Lego City. Incluye minifiguras de bomberos, camión de bomberos y accesorios para construir una estación completa."
    },
    {
      "id": 13,
      "nombre": "Figura de accion",
      "categoria": "juguetes",
      "imagen": "/img/hombreArania.jpg",
      "precio": 2199,
      "cantidad":1,
      "edad_minima": 5,
      "descripcion": "Figura de accion de El hombre araña."
    },
    {
      "id": 14,
      "nombre": "Juego de mesa Monopoly Fornite",
      "imagen": "/img/monopoly.jpg",
      "categoria": "juguetes",
      "precio": 2499,
      "cantidad":1,
      "edad_minima": 13,
      "descripcion": "Juego de mesa de Monopoly adaptado para niños."
    },
    {
      "id": 15,
      "nombre": "El principito",
      "imagen": "/img/elPrincipito.jpg",
      "categoria": "libros",
      "precio": 1250,
      "cantidad":1,
      "edad_minima": 6,
      "descripcion": "Libro de aventuras del principito en varios planetas."
    },
    {
      "id": 16,
      "nombre": "El pollo Pepe y el huevo",
      "categoria": "libros",
      "imagen": "/img/elPolloPepe.jpg",
      "precio": 1099,
      "cantidad":1,
      "edad_minima": 2,
      "descripcion": "El pollo Pepe ha encontrado un huevo gigantesco de lo más misterioso... ¿Qué habrá dentro? Un divertido libro con pop-ups."
    },
    {
      "id": 17,
      "nombre": "Muñeca Barbie",
      "categoria": "juguetes",
      "imagen": "/img/barbie.jpg",
      "precio": 1999,
      "cantidad":1,
      "edad_minima": 3,
      "descripcion": "Muñeca con ropa y accesorios para peinar y jugar."
    },
    {
      "id": 18,
      "nombre": "Puzzle de animales",
      "categoria": "juguetes",
      "imagen": "/img/puzzle.jpg",
      "precio": 890,
      "cantidad":1,
      "edad_minima": 4,
      "descripcion": "Puzzle de 100 piezas con imágenes de animales."
    },
    {
      "id": 19,
      "nombre": "Mamá elefante es genial",
      "imagen": "/img/Mama-Elefante-es-genial.jpg",
      "categoria": "libros",
      "precio": 750,
      "cantidad":1,
      "edad_minima": 6,
      "descripcion": "Con este libro, los niños y niñas podrán hablar con el adulto sobre la aceptación y el respeto a las diferencias"
    }
  ]

  export default productos
  