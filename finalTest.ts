import readlineSync = require('readline-sync');

import { Professional } from "./professional";
import { movieBD, movie2 } from "./testImdb";
import { movie1 } from './testMovies';


// Paso 8: Leer datos desde la consola

let pro = new Professional("", 0, 0, 0, false, "", 0, "");
let movieTitles = [movie1.title, movie2.title];

console.log("Por favor, rellene todos los datos del profesional a continuación: \n ");
for (const key in pro) {
  pro[key] = readlineSync.question(`${key}: `);
}

if (pro != null) {
  let index = readlineSync.keyInSelect(movieTitles, `¿A qué pelicula pertenece el profesional?`);
  movieBD.movies[index].actors.push(pro);
  movieBD.escribirEnFicheroJSON("imdbBBDD");
  console.log(pro.getName() + ' agregad@ a la película: ' + movieBD.movies[index].title + ' correctamente');
}







