type ValidFormat = 'video' | 'image';


interface SeedCourse {
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
    sections:SeedSection[];
    userProgress?:number;
    comments?:string[]; // comentarios del curso
}

interface SeedSection {
    name: string; //Titulo de la seccion
    classes:SeedClass[];
}


interface SeedClass {
    name:string, //titulo de la clase
    type: ValidFormat, //tipo de clase. video, imagenes, documento
    duration:number, // duracion de la clase en minutos
    isCompleted:boolean, // si esta completado o no por el estudiante
    content: string | string[], // el contenido, un video o varias imagenes
    contentUrl:string | string[], // url de ese contenido multimedia
    links?:string[], //enlaces de apoyo como videos de youtube o repositorios
    quiz?: SeedQuiz[], //seccion de quiz por clase
    comments?:SeedComment[], //seccion de comentarios por clase

}

interface SeedQuiz {
    question:string, //pregunta del quiz
    answers:string[], //opciones del quiz
    correctAnswer:number //numero de la respuesta correcta
}

interface SeedComment {
    user: string; //usuario que creo el comentario
    comment: string; //comentario
    created_at: Date; //fecha de creacion del comentario
    likes: number; //numero de likes del comentario
    dislikes: number; //numero de dislikes del comentario
}

interface SeedData  {
    courses: SeedCourse[]; // arreglo de courses
}

export const initialData: SeedData = {
    courses: [
        {
            author:'Jose Carrera',
            category:'Technology',
            description: 'Curso de programacion',
            image: 'technology.png',
            name: 'Programacion',
            slug:'programacion_1',
            tags: ['programacion', 'education', 'future'],
            price: 1000,
            rating: 4.0,
            purchases: 0,
            level:"easy",
            uploadedAt:'2017-10-10T00:00:00',
            sections: [
                {
                    name:"Introduction",
                    classes:[{
                        name:'Introduccion',
                        duration:1000,
                        isCompleted:false,
                        content:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        contentUrl:"https://www.youtube.com/",
                        links:['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
                        type:'video',
                        quiz: [
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                        ]
                    }]
                }
            ]
        },
       {
            author:'Jose Carrera',
            category:'Arts',
            description: 'Curso de programacion',
            image: 'arts.png',
            name: 'Modelacion 3D',
            slug:'programacion_2',
            tags: ['programacion', 'education', 'future'],
            price: 1000,
            rating: 4.0,
            purchases: 0,
            level:"medium",
            uploadedAt:'2017-10-10T00:00:00',
            sections: [
                {
                    name:"Introduction",
                    classes:[{

                        name:'introduccion',
                        duration:1000,
                        isCompleted:false,
                        content:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        contentUrl:'https://www.youtube.com/watch?v=',
                        links:['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
                        type:'video',
                        quiz: [
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                            {
                                question:"How much is 1 plus 1?",
                                answers:['2', '3', '4', '5'],
                                correctAnswer:1
                            },
                        ]
                    }]
                }
            ]
        },
        {
            author: 'Maria Rodriguez',
            category: 'Lifestyle',
            description: 'Curso de nutrición y dieta saludable',
            image: 'lifestyle.png',
            name: 'Nutrición Saludable',
            slug: 'nutricion_saludable_1',
            tags: ['nutricion', 'salud', 'bienestar'],
            price: 800,
            rating: 4.5,
            purchases: 0,
            level: 'medium',
            uploadedAt: '2019-05-20T00:00:00',
            sections: [
                {
                    name: 'Introduccion',
                    classes: [
                        {

                            name: 'Importancia de una dieta balanceada',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es un componente esencial de una dieta equilibrada?',
                                    answers: ['Proteínas', 'Azúcares', 'Grasas', 'Vitaminas'],
                                    correctAnswer: 0
                                },
                                {
                                    question: '¿Cuánta agua se recomienda consumir diariamente para una hidratación adecuada?',
                                    answers: ['1 litro', '2 litros', '3 litros', '4 litros'],
                                    correctAnswer: 1
                                }
                            ]
                        },
                        {
                            name: 'Planificación de comidas',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué debería incluirse en un plato equilibrado según la regla del plato?',
                                    answers: ['Carbohidratos, proteínas, grasas, vegetales', 'Solo proteínas', 'Solo carbohidratos', 'Solo grasas'],
                                    correctAnswer: 0
                                },
                                {
                                    question: '¿Cuál es el objetivo principal de la planificación de comidas?',
                                    answers: ['Reducir el tiempo de cocción', 'Asegurar una ingesta balanceada de nutrientes', 'Perder peso rápidamente', 'Evitar la comida rápida'],
                                    correctAnswer: 1
                                }
                            ]
                        }                           
                    ]
                },
            ]
        },
        {
            author: 'Ana López',
            category: 'Arts',
            description: 'Curso de pintura al óleo para principiantes',
            image: 'arts.png',
            name: 'Pintura al Óleo',
            slug: 'pintura_oleo_1',
            tags: ['arte', 'pintura', 'creatividad'],
            price: 1200,
            rating: 4.7,
            purchases: 0,
            level: 'easy',
            uploadedAt: '2020-08-15T00:00:00',
            sections: [
                {
                    name: 'Introducción a la pintura al óleo',
                    classes: [
                        {
                            
                            name: 'Introducción a la pintura al óleo',
                            duration: 900,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=pqrstuv',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=pqrstuv'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es uno de los materiales básicos necesarios para la pintura al óleo?',
                                    answers: ['Acuarelas', 'Pinceles', 'Témperas', 'Crayones'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Qué tipo de superficie se utiliza comúnmente para la pintura al óleo?',
                                    answers: ['Papel', 'Tela', 'Madera', 'Vidrio'],
                                    correctAnswer: 1
                                }
                            ]
                        },
                        {
                            name: 'Técnicas básicas de pintura al óleo',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=uvwxyza',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=uvwxyza'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es el "empaste" en la pintura al óleo?',
                                    answers: ['Una técnica para diluir el óleo', 'Un error común en la mezcla de colores', 'Una técnica para crear texturas', 'Un término para describir el secado rápido de la pintura'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Qué significa la técnica de "glaseado" en la pintura al óleo?',
                                    answers: ['Aplicar una capa final de barniz', 'Aplicar capas delgadas de color transparente', 'Eliminar errores con una capa de pintura blanca', 'Agregar detalles con pintura gruesa'],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Carlos García',
            category: 'Business',
            description: 'Curso de inversiones en el mercado de valores',
            image: 'business.png',
            name: 'Inversiones en Bolsa',
            slug: 'inversiones_bolsa_1',
            tags: ['finanzas', 'inversiones', 'mercado de valores'],
            price: 1500,
            rating: 4.9,
            purchases: 0,
            level: 'hard',
            uploadedAt: '2021-03-25T00:00:00',
            sections: [
                {
                    name: 'Introducción al mercado de valores',
                    classes: [
                        {

                            name: 'Introducción al mercado de valores',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=ghijklm',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=ghijklm'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué representa un índice bursátil?',
                                    answers: ['El precio de una acción individual', 'La suma de todas las acciones en el mercado', 'El rendimiento de un grupo de acciones', 'La cantidad de empresas en el mercado'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Qué es el "spread" en el contexto del mercado de valores?',
                                    answers: ['La diferencia entre el precio de compra y venta de un activo', 'El porcentaje de retorno de una inversión', 'La cantidad de acciones disponibles para la venta', 'La tendencia general del mercado'],
                                    correctAnswer: 0
                                }
                            ]
                        },
                        {
                            name: 'Estrategias de inversión',
                            duration: 1800,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=nopqrst',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=nopqrst'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es el "day trading"?',
                                    answers: ['Invertir a largo plazo', 'Comprar y vender acciones en el mismo día', 'Invertir en bienes raíces', 'Comprar acciones de empresas en crecimiento'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Cuál es una estrategia de inversión diversificada?',
                                    answers: ['Comprar acciones de una sola empresa', 'Invertir en diferentes clases de activos', 'Mantener efectivo en lugar de invertir', 'Concentrarse en un solo sector del mercado'],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Carlos Martínez',
            category: 'Business',
            description: 'Curso de emprendimiento y desarrollo de negocios',
            image: 'business.png',
            name: 'Emprendimiento Exitoso',
            slug: 'emprendimiento_exitoso_1',
            tags: ['negocios', 'emprendimiento', 'liderazgo'],
            price: 1500,
            rating: 4.8,
            purchases: 0,
            level: 'hard',
            uploadedAt: '2021-02-28T00:00:00',
            sections: [
                {
                    name: 'Introducción al emprendimiento',
                    classes: [
                        {
                            name: 'Desarrollo de una idea de negocio',
                            duration: 1800,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=mnopqrs',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=mnopqrs'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es un análisis DAFO?',
                                    answers: ['Una técnica para evaluar las debilidades y amenazas de un negocio', 'Una herramienta para identificar las fortalezas y oportunidades de un negocio', 'Un tipo de financiamiento para startups', 'Un método para medir la rentabilidad de una empresa'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Cuál de las siguientes es una característica clave de un modelo de negocio escalable?',
                                    answers: ['Dependencia de recursos físicos', 'Límites en el alcance geográfico', 'Capacidad para crecer sin proporción directa a los recursos', 'Necesidad de personal especializado'],
                                    correctAnswer: 2
                                }
                            ]

                        },
                        {
                            name: 'Estrategias de marketing y ventas',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=stuvwxz',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=stuvwxz'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es uno de los principales objetivos del marketing de contenido?',
                                    answers: ['Generar ventas directas', 'Aumentar el tráfico del sitio web', 'Obtener seguidores en redes sociales', 'Promover eventos de la empresa'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Qué es el embudo de ventas?',
                                    answers: ['Una herramienta para calcular el ROI de una campaña publicitaria', 'Un diagrama que muestra el flujo de clientes potenciales a través del proceso de ventas', 'Un método para fijar precios de productos', 'Una estrategia para crear lealtad del cliente'],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Laura Gómez',
            category: 'Languages',
            description: 'Curso de aprendizaje de inglés para hispanohablantes',
            image: 'languajes.png',
            name: 'Inglés Práctico',
            slug: 'ingles_practico_1',
            tags: ['inglés', 'idiomas', 'aprendizaje'],
            price: 900,
            rating: 4.6,
            purchases: 0,
            level: 'medium',
            uploadedAt: '2023-04-10T00:00:00',
            sections: [
                {
                    name: 'Introducción al inglés',
                    classes: [
                        {

                            name: 'Gramática básica en inglés',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=qrstuvw',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=qrstuvw'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es la forma correcta del verbo "to be" en la tercera persona singular del presente simple?',
                                    answers: ['Is', 'Am', 'Are', 'Be'],
                                    correctAnswer: 0
                                },
                                {
                                    question: '¿Cuál de las siguientes palabras es un pronombre personal en inglés?',
                                    answers: ['House', 'Table', 'I', 'Book'],
                                    correctAnswer: 2
                                }
                            ]
                        },
                        {
                            name: 'Conversación cotidiana en inglés',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=uvwxyz1',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=uvwxyz1'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es una expresión común en inglés para saludar a alguien por la mañana?',
                                    answers: ['Good afternoon', 'Good evening', 'Good morning', 'Good night'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Qué significa la frase "How are you doing?" en inglés?',
                                    answers: ['¿Cómo te llamas?', '¿Cómo estás?', '¿Dónde vives?', '¿Qué hora es?'],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Elena Sanchez',
            category: 'Lifestyle',
            description: 'Curso de cocina italiana tradicional',
            image: 'lifestyle.png',
            name: 'Cocina Italiana Auténtica',
            slug: 'cocina_italiana_1',
            tags: ['cocina', 'italiana', 'gastronomía'],
            price: 1100,
            rating: 4.9,
            purchases: 0,
            level: 'hard',
            uploadedAt: '2023-11-20T00:00:00',
            sections: [
                {
                    name: 'Introducción a la cocina italiana',
                    classes: [
                        {
                            name: 'Introducción a la cocina italiana',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es el ingrediente principal de la salsa boloñesa?',
                                    answers: ['Carne de res', 'Tomates', 'Aceite de oliva', 'Albahaca'],
                                    correctAnswer: 0
                                },
                                {
                                    question: '¿Cuál es el plato más conocido de la cocina italiana en todo el mundo?',
                                    answers: ['Pizza', 'Risotto', 'Spaghetti Carbonara', 'Lasagna'],
                                    correctAnswer: 2
                                }
                            ]

                        },
                        {
                            name: 'El arte de hacer pasta fresca',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué ingrediente principal se necesita para hacer pasta fresca?',
                                    answers: ['Harina y agua', 'Harina y huevo', 'Leche y huevos', 'Maicena y agua'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Cuál es la forma tradicional de cortar la pasta fresca en tiras finas?',
                                    answers: ['Cubos', 'Espaguetis', 'Penne', 'Tagliatelle'],
                                    correctAnswer: 3
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'David Ramirez',
            category: 'Lifestyle',
            description: 'Curso de entrenamiento de fuerza y ​​acondicionamiento físico',
            image: 'lifestyle.png',
            name: 'Fuerza Total',
            slug: 'fuerza_total_1',
            tags: ['fitness', 'entrenamiento', 'salud'],
            price: 1300,
            rating: 4.7,
            purchases: 0,
            level: 'medium',
            uploadedAt: '2023-09-05T00:00:00',
            sections: [
                {
                    name: 'Introducción al entrenamiento de fuerza',
                    classes: [
                        {

                            name: 'Fundamentos del entrenamiento de fuerza',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál de los siguientes ejercicios se centra principalmente en el desarrollo de la fuerza en las piernas?',
                                    answers: ['Press de banca', 'Sentadillas', 'Curl de bíceps', 'Plancha'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Cuál es uno de los beneficios del entrenamiento de fuerza?',
                                    answers: ['Mejora de la flexibilidad', 'Aumento de la resistencia cardiovascular', 'Aumento de la masa muscular', 'Reducción del estrés'],
                                    correctAnswer: 2
                                }
                            ]
                        },
                        {
                            name: 'Entrenamiento de circuito de cuerpo completo',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es el entrenamiento de circuito?',
                                    answers: ['Una serie de ejercicios realizados en un solo lugar', 'Una rutina que se centra únicamente en el cardio', 'Una serie de ejercicios que se realizan sin descanso entre ellos', 'Una rutina de entrenamiento solo para principiantes'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Cuál es uno de los objetivos del entrenamiento de circuito?',
                                    answers: ['Aumentar la flexibilidad', 'Mejorar la postura', 'Incrementar la fuerza muscular y cardiovascular', 'Reducir la velocidad del metabolismo'],
                                    correctAnswer: 2
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Isabel Martínez',
            category: 'Arts',
            description: 'Curso de fotografía digital para principiantes',
            image: 'arts.png',
            name: 'Fotografía Digital 101',
            slug: 'fotografia_digital_101_1',
            tags: ['fotografía', 'digital', 'creatividad'],
            price: 950,
            rating: 4.5,
            purchases: 0,
            level: 'easy',
            uploadedAt: '2022-12-15T00:00:00',
            sections: [
                {
                    name: 'Introducción a la fotografía digital',
                    classes: [
                        {

                            name: 'Introducción a la fotografía digital',
                            duration: 900,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es el diafragma en la fotografía?',
                                    answers: ['La parte de la cámara donde se almacenan las fotos', 'La apertura en el objetivo que controla la cantidad de luz que entra', 'El dispositivo que captura la imagen', 'La velocidad a la que se toma la foto'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Cuál es la función principal del ISO en la fotografía digital?',
                                    answers: ['Controlar la apertura del diafragma', 'Determinar la velocidad del obturador', 'Ajustar la sensibilidad a la luz del sensor de la cámara', 'Seleccionar el modo de enfoque'],
                                    correctAnswer: 2
                                }
                            ]
                        },
                        {
                            name: 'Composición fotográfica básica',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es la regla de los tercios en fotografía?',
                                    answers: ['Una técnica para dividir la imagen en nueve secciones iguales', 'Un método para ajustar el brillo y el contraste de la imagen', 'Un tipo de lente de cámara muy popular', 'Una técnica para añadir efectos especiales a la imagen'],
                                    correctAnswer: 0
                                },
                                {
                                    question: '¿Cuál es uno de los elementos clave de la composición fotográfica?',
                                    answers: ['La marca de agua', 'El formato de archivo', 'La resolución de la imagen', 'El encuadre y la perspectiva'],
                                    correctAnswer: 3
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Daniel González',
            category: 'Arts',
            description: 'Curso de teoría musical y práctica instrumental',
            image: 'arts.png',
            name: 'Música en Armonía',
            slug: 'musica_en_armonia_1',
            tags: ['música', 'teoría musical', 'instrumentos'],
            price: 1400,
            rating: 4.8,
            purchases: 0,
            level: 'medium',
            uploadedAt: '2023-07-10T00:00:00',
            sections: [
                {
                    name: 'Introducción a la teoría musical',
                    classes: [
                        {
                            name: 'Introducción a la teoría musical',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es un acorde?',
                                    answers: ['Una nota individual', 'Un conjunto de notas tocadas simultáneamente', 'Un ritmo musical', 'Una melodía principal'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Qué representa la clave de sol en la notación musical?',
                                    answers: ['El tono de la pieza musical', 'El ritmo de la pieza musical', 'El compás de la pieza musical', 'La melodía principal de la pieza musical'],
                                    correctAnswer: 3
                                }
                            ]

                        },
                        {
                            name: 'Práctica instrumental: guitarra',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Cuál es una de las partes principales de una guitarra acústica?',
                                    answers: ['Cuerdas', 'Teclas', 'Parches', 'Cuerdas de metal'],
                                    correctAnswer: 0
                                },
                                {
                                    question: '¿Qué tipo de acordes se pueden tocar en una guitarra?',
                                    answers: ['Solo mayores', 'Solo menores', 'Mayores y menores', 'Solo sostenidos'],
                                    correctAnswer: 2
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Sofía Fernandez',
            category: 'Lifestyle',
            description: 'Curso de desarrollo personal y autoestima',
            image: 'lifestyle.png',
            name: 'Desarrollo Personal Proactivo',
            slug: 'desarrollo_personal_proactivo_1',
            tags: ['desarrollo personal', 'autoestima', 'crecimiento'],
            price: 1200,
            rating: 4.6,
            purchases: 0,
            level: 'medium',
            uploadedAt: '2023-10-20T00:00:00',
            sections: [
                {
                    name: 'Introducción a la autoestima',
                    classes: [
                        {

                            name: 'Autoconocimiento y autodescubrimiento',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué implica el autoconocimiento?',
                                    answers: ['Conocer a otras personas', 'Conocerse a uno mismo', 'Conocer datos históricos', 'Conocer el futuro'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Por qué es importante el autodescubrimiento en el desarrollo personal?',
                                    answers: ['Para ganar premios', 'Para alcanzar el éxito de manera auténtica', 'Para impresionar a los demás', 'Para hacer amigos'],
                                    correctAnswer: 1
                                }
                            ]
                        },
                        {
                            name: 'Gestión del tiempo y establecimiento de metas',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es la gestión del tiempo?',
                                    answers: ['La habilidad para hacer múltiples tareas a la vez', 'La capacidad de administrar eficientemente el tiempo disponible', 'La habilidad para evitar cualquier tarea', 'La capacidad de procrastinar constantemente'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Por qué es importante establecer metas en el desarrollo personal?',
                                    answers: ['Porque no hay nada más que hacer', 'Para tener un sentido de dirección y logro', 'Porque otras personas lo hacen', 'Porque las metas son irrelevantes'],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Alejandro Garcia',
            category: 'Arts',
            description: 'Curso de manualidades creativas con materiales reciclados',
            image: 'arts.png',
            name: 'Creatividad Eco-Amigable',
            slug: 'creatividad_eco_amigable_1',
            tags: ['manualidades', 'reciclaje', 'creatividad'],
            price: 1000,
            rating: 4.7,
            purchases: 0,
            level: 'easy',
            uploadedAt: '2023-08-15T00:00:00',
            sections: [
                {
                    name: 'Introducción a las manualidades con materiales reciclados',
                    classes: [
                        {

                            name: 'Introducción a las manualidades con materiales reciclados',
                            duration: 900,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Por qué es importante reciclar materiales?',
                                    answers: ['Para ahorrar dinero', 'Para mantener limpia la casa', 'Para reducir la cantidad de residuos y proteger el medio ambiente', 'Para tener más espacio en casa'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Qué tipo de materiales se pueden reciclar para hacer manualidades?',
                                    answers: ['Solo papel', 'Solo plástico', 'Cualquier material que se pueda reutilizar', 'Ningún material se puede reciclar'],
                                    correctAnswer: 2
                                }
                            ]
                        },
                        {
                            name: 'Proyectos creativos con materiales reciclados',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué tipo de manualidades se pueden hacer con botellas de plástico recicladas?',
                                    answers: ['Muebles', 'Juguetes', 'Lámparas', 'Todas las anteriores'],
                                    correctAnswer: 3
                                },
                                {
                                    question: '¿Cuál es una ventaja de hacer manualidades con materiales reciclados?',
                                    answers: ['Son más caras que las manualidades tradicionales', 'No se pueden personalizar', 'Ayudan a promover la creatividad y la conciencia ambiental', 'Son menos duraderas'],
                                    correctAnswer: 2
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Patricia López',
            category: 'Lifestyle',
            description: 'Curso de crianza positiva para padres primerizos',
            image: 'lifestyle.png',
            name: 'Crianza Positiva',
            slug: 'crianza_positiva_1',
            tags: ['crianza', 'padres', 'familia'],
            price: 1100,
            rating: 4.8,
            purchases: 0,
            level: 'easy',
            uploadedAt: '2023-06-10T00:00:00',
            sections: [
                {
                    name: 'Introducción a la crianza positiva',
                    classes: [
                        {

                            name: 'Principios fundamentales de la crianza positiva',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es la crianza positiva?',
                                    answers: ['Un método autoritario para educar a los niños', 'Un enfoque basado en el castigo y la disciplina estricta', 'Un enfoque que se centra en fortalecer la relación entre padres e hijos y fomentar el desarrollo positivo del niño', 'Un enfoque que ignora las necesidades emocionales de los niños'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Cuál es uno de los principios básicos de la crianza positiva?',
                                    answers: ['Castigar a los niños por mal comportamiento', 'Establecer límites y consecuencias claras', 'Ignorar las necesidades emocionales de los niños', 'Mantener una comunicación abierta y respetuosa'],
                                    correctAnswer: 3
                                }
                            ]
                        },
                        {
                            name: 'Comunicación efectiva y resolución de conflictos',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Por qué es importante la comunicación efectiva en la crianza positiva?',
                                    answers: ['Para controlar a los niños', 'Para evitar el desarrollo emocional de los niños', 'Para establecer una conexión emocional y comprensión mutua entre padres e hijos', 'Para castigar a los niños por su comportamiento'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Qué habilidades ayudan a los padres a resolver conflictos de manera positiva?',
                                    answers: ['Gritar y enfadarse', 'Escuchar activamente y mostrar empatía', 'Ignorar el problema', 'Tomar decisiones arbitrarias'],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: "María Pérez",
            category: "Technology",
            description: "Curso completo de desarrollo web",
            image: "technology.png",
            name: "Desarrollo Web Pro",
            slug: "desarrollo_web_pro_1",
            tags: ["desarrollo web", "programación", "front-end", "back-end"],
            price: 1200,
            rating: 4.9,
            purchases: 0,
            level: "medium",
            uploadedAt: "2023-09-01T00:00:00",
            sections: [
                {
                    name: "Introducción al desarrollo web",
                    classes: [
                        {

                            name: "Introducción al desarrollo web",
                            duration: 1200,
                            isCompleted: false,
                            content: "https://www.youtube.com/watch?v=abcdefg",
                            contentUrl: "https://www.youtube.com/",
                            links: ["https://www.youtube.com/watch?v=abcdefg"],
                            type: "video",
                            quiz: [
                                {
                                    question: "¿Qué es HTML?",
                                    answers: ["Un lenguaje de programación", "Un protocolo de red", "Un lenguaje de marcado para la creación de páginas web", "Un sistema operativo"],
                                    correctAnswer: 2
                                },
                                {
                                    question: "¿Qué significa CSS?",
                                    answers: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading Style Syntax"],
                                    correctAnswer: 0
                                }
                            ]
                        },
                        {
                            name: "Desarrollo front-end con HTML, CSS y JavaScript",
                            duration: 1800,
                            isCompleted: false,
                            content: "https://www.youtube.com/watch?v=hijklmn",
                            contentUrl: "https://www.youtube.com/",
                            links: ["https://www.youtube.com/watch?v=hijklmn"],
                            type: "video",
                            quiz: [
                                {
                                    "question": "¿Qué hace JavaScript en el desarrollo web?",
                                    "answers": ["Controla el estilo y el diseño de la página", "Agrega interactividad y dinamismo", "Define la estructura y el contenido de la página", "Optimiza la velocidad de carga"],
                                    "correctAnswer": 1
                                },
                                {
                                    "question": "¿Cuál es la función principal de CSS en el desarrollo web?",
                                    "answers": ["Definir la estructura de la página", "Agregar funcionalidad a la página", "Estilizar la presentación de la página", "Gestionar la interacción del usuario"],
                                    "correctAnswer": 2
                                }
                            ]
                        },
                        {
                            name: "Desarrollo back-end con Node.js y MongoDB",
                            duration: 2000,
                            isCompleted: false,
                            content: "https://www.youtube.com/watch?v=lmnopqr",
                            contentUrl: "https://www.youtube.com/",
                            links: ["https://www.youtube.com/watch?v=lmnopqr"],
                            type: "video",
                            quiz: [
                                {
                                    question: "¿Qué es Node.js?",
                                    answers: ["Un sistema operativo", "Un entorno de ejecución de JavaScript del lado del servidor", "Una base de datos", "Un lenguaje de programación"],
                                    correctAnswer: 1
                                },
                                {
                                    question: "¿Qué tipo de base de datos es MongoDB?",
                                    answers: ["Relacional", "NoSQL", "Orientada a objetos", "Jerárquica"],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Juan Pérez',
            category: 'Technology',
            description: 'Learn TypeScript for web development',
            image: 'technology.png',
            name: 'TypeScript Mastery',
            slug: 'typescript_mastery_1',
            tags: ['typescript', 'web development', 'programming'],
            price: 1200,
            rating: 4.7,
            purchases: 0,
            level: 'medium',
            uploadedAt: '2023-09-20T00:00:00',
            sections: [
                {
                    name: 'Introduction to TypeScript',
                    classes: [
                        {

                            name: 'Introduction to TypeScript',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: 'What is TypeScript?',
                                    answers: ['A superset of JavaScript', 'A programming language developed by Microsoft', 'A framework for building web applications', 'A database management system'],
                                    correctAnswer: 0
                                },
                                {
                                    question: 'What are the benefits of using TypeScript?',
                                    answers: ['It adds static typing', 'It compiles to plain JavaScript', 'It improves code readability and maintainability', 'All of the above'],
                                    correctAnswer: 3
                                }
                            ]
                        },
                        {
                            name: 'TypeScript Syntax and Features',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: 'What is a TypeScript interface?',
                                    answers: ['A contract for defining the structure of an object', 'A graphical user interface', 'A built-in data type', 'A software tool for debugging'],
                                    correctAnswer: 0
                                },
                                {
                                    question: 'How does TypeScript handle optional function parameters?',
                                    answers: ['It allows you to omit parameters from function calls', 'It throws an error if any parameter is omitted', 'It automatically fills in default values for omitted parameters', 'It prompts the user to enter missing parameters'],
                                    correctAnswer: 0
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            author: 'Lucía Sánchez',
            category: 'Lifestyle',
            description: 'Curso de yoga para principiantes',
            image: 'lifestyle.png',
            name: 'Yoga para Todos',
            slug: 'yoga_para_todos_1',
            tags: ['yoga', 'salud', 'bienestar'],
            price: 900,
            rating: 4.5,
            purchases: 0,
            level: 'easy',
            uploadedAt: '2023-04-25T00:00:00',
            sections: [
                {
                    name: 'Introducción al yoga y sus beneficios',
                    classes: [
                        {

                            name: 'Introducción al yoga y sus beneficios',
                            duration: 1200,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=abcdefg',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=abcdefg'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es el yoga?',
                                    answers: ['Una forma de ejercicio físico intenso', 'Una disciplina espiritual originaria de la India que incluye posturas físicas, técnicas de respiración y meditación', 'Una práctica de danza', 'Una dieta vegetariana'],
                                    correctAnswer: 1
                                },
                                {
                                    question: '¿Cuáles son algunos beneficios del yoga?',
                                    answers: ['Aumento del estrés y la ansiedad', 'Reducción de la flexibilidad', 'Mejora del equilibrio y la fuerza muscular, reducción del estrés y la ansiedad, mejora del bienestar general', 'Ninguna de las anteriores'],
                                    correctAnswer: 2
                                }
                            ]
                        },
                        {
                            name: 'Posturas básicas de yoga (Asanas)',
                            duration: 1500,
                            isCompleted: false,
                            content: 'https://www.youtube.com/watch?v=hijklmn',
                            contentUrl: 'https://www.youtube.com/',
                            links: ['https://www.youtube.com/watch?v=hijklmn'],
                            type: 'video',
                            quiz: [
                                {
                                    question: '¿Qué es una "asana" en yoga?',
                                    answers: ['Una técnica de respiración', 'Un mantra', 'Una postura física', 'Un instrumento musical'],
                                    correctAnswer: 2
                                },
                                {
                                    question: '¿Cuál es una postura básica de yoga para principiantes?',
                                    answers: ['Savasana (Postura del cadáver)', 'Vrksasana (Postura del árbol)', 'Adho Mukha Svanasana (Postura del perro mirando hacia abajo)', 'Bakasana (Postura del cuervo)'],
                                    correctAnswer: 2
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
}