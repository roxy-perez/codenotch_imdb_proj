import { writeFileSync, readFileSync } from 'node:fs';
import { Movie } from "./movie";

export class Imbd {

    constructor(public movies: Movie[]) { }

    // Paso 7: Añadir nuevos métodos a la clase
    public escribirEnFicheroJSON(nombreFichero: string) {
        console.log("\n**** Creando fichero JSON ****\n")
        let jsonDB = JSON.stringify(this.movies);
        const file = nombreFichero.concat(".", "json");
        writeFileSync(file,
            jsonDB,
            {
                encoding: "utf8",
                flag: "a+", //- a+ = Open file for reading and appending. The file is created if not exists
                mode: 0o666
            });

    }

    public obtenerInstanciaIMDB(nombreFichero: string): Imbd|any {
        console.log("\n**** Reeding and parsing JSON ****\n")

        try {
            const file = nombreFichero.concat(".", "json");
            const data = readFileSync(file,
                { encoding: 'utf8', flag: 'r' });

            let movies = JSON.parse(data.toString());
            return new Imbd(movies);

        } catch (err) {
            console.log("Algo salió mal")
            console.log(err);
        }
    }

}
