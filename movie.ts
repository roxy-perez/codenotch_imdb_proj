import { Professional } from "./professional";
export class Movie {
  public actors: Professional[] = [];
  public director: Professional = new Professional("",0,0,0,false,"", 0,"");
  public writer: Professional = new Professional("",0,0,0,false,"",0,"");
  public language: string = "";
  public platform: string = "";
  public isMCU: boolean = false;
  public mainCharacterName: string = "";
  public producer: string = "";
  public distributor: string = "";

  constructor(
    public title: string,
    public releaseYear: number,
    public nationality: string,
    public genre: string
  ) {}

    public printAllMovies() {
        for (const key in this) {
            console.log(this[key]);
        }
    }
}
