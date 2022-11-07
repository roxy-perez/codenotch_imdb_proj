import { writeFileSync, readFileSync } from "node:fs";

import { Movie } from "./movie";
import { Imbd } from "./imdb";
import { movie1 } from "./testMovies";
import { Professional } from "./professional";

let movie2 = new Movie(
  "Everything Everywhere All at Once",
  2022,
  "american",
  "Sci-fi"
);

console.log("\n--- :: IMDB :: ---\n");
movie2.actors = [
  new Professional(
    "Michelle Yeoh",
    60,
    49,
    1.61,
    false,
    "malaysian",
    0,
    "actor"
  ),
  new Professional(
    "Jamie Lee Curtis",
    63,
    62,
    1.7,
    false,
    "amaerican",
    0,
    "actor"
  ),
];
movie2.director = new Professional(
  "Dan Kwan",
  49,
  81,
  1.73,
  false,
  "chinese",
  0,
  "director"
);
movie2.writer = new Professional(
  "Daniel Scheinert",
  36,
  80,
  1.75,
  false,
  "american",
  0,
  "writer"
);

movie2.distributor = "A24";
movie2.isMCU = false;
movie2.platform = "Cinema";
movie2.language = "english|spanish";
movie2.mainCharacterName = "Evelyn Wang";
movie2.producer = "AGBO";

let movieBD = new Imbd([movie1, movie2]);

movieBD.escribirEnFicheroJSON("testJson");
console.log(movieBD.obtenerInstanciaIMDB("testJson"));

let jsonDB = JSON.stringify(movieBD);

// Paso 6: Lectura y escritura de un fichero

let createFile = () => {
  console.log("\n**** Creando fichero JSON ****\n");
  writeFileSync("imdbBBDD.json", jsonDB, {
    encoding: "utf8",
    flag: "a+", //- a+ = Open file for reading and appending. The file is created if not exists
    mode: 0o666,
  });
};

let readJsonFile = () => {
  const data = readFileSync("./imdbBBDD.json", { encoding: "utf8", flag: "r" });
  console.log(data);
  let movies = JSON.parse(data.toString());
  console.log("\n**** Reeding and parsing JSON ****\n");
  console.log(movies);
};

createFile();

readJsonFile();

export { movieBD, movie2 }