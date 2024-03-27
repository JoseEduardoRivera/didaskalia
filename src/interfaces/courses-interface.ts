export type ValidFormat = 'video' | 'image';


export interface Course {
    name: string; //Titulo del curso
    description: string; //Descripcion del curso
    image:string; //Imagen principal del curso
    slug:string,
    tags:string[],
    price:number; //precio del curso
    author:string; //autor del curso
    category:'Technology' | 'Business' | 'Arts' | 'Languages' | 'Lifestyle'; //categoria del curso
    rating:number; // calificacion del curso
    purchases:number; //numero de ventas del curso
    level: 'easy' | 'medium' | 'hard',
    uploadedAt:Date | string; //
    sections:Section[];
    userProgress?:number;
    comments?:string[]; // comentarios del curso
}

export interface Section {
    name: string; //Titulo de la seccion
    classes:Class[];
}


export interface Class {
    name:string, //titulo de la clase
    type: ValidFormat, //tipo de clase. video, imagenes, documento
    duration:number, // duracion de la clase en minutos
    isCompleted:boolean, // si esta completado o no por el estudiante
    content: string | string[], // el contenido, un video o varias imagenes
    contentUrl:string | string[], // url de ese contenido multimedia
    links?:string[], //enlaces de apoyo como videos de youtube o repositorios
    quiz?: Quiz[], //seccion de quiz por clase
    comments?:Comment[], //seccion de comentarios por clase

}

export interface Quiz {
    question:string, //pregunta del quiz
    answers:string[], //opciones del quiz
    correctAnswer:number //numero de la respuesta correcta
}

export interface Comment {
    user: string; //usuario que creo el comentario
    comment: string; //comentario
    created_at: Date; //fecha de creacion del comentario
    likes: number; //numero de likes del comentario
    dislikes: number; //numero de dislikes del comentario
}