export class Disco {
    titulo!: string;
    artista!: string;
    fechaLanzamiento!: string;
    urlImagen!: string;
  
    constructor(titulo: string, artista: string, fechaLanzamiento: string, urlImagen: string) {
      this.titulo = titulo;
      this.artista = artista;
      this.fechaLanzamiento = fechaLanzamiento;
      this.urlImagen = urlImagen;
    }
  }