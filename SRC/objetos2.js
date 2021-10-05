//objeto literal

const natalia = {
    name: "natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de html y css",
        "Curso Practico de html y css",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

//prototipo

function student (name, age) {
    this.nombre = name;
    this.edad = age;
    this.aprobarCurso = [];
}

//instancias

student.prototype.aprobar = function (cursos) {
    this.aprobarCurso.push(cursos);
};

const juanita = new student("juanita", 15, "curso de css grid layout");

student.prototype.nuevaEdad = function (edade){
    this.edad += edade;
}

juanita.nuevaEdad(2);

juanita.aprobar("curso de unreal engine");
juanita.aprobar("curso de grid layout");

console.log(juanita);

//Natalia apruebe curso

natalia.aprobarCurso("curso de responsive design");
console.log(natalia.cursosAprobados);

//clases

class students {
    constructor ({
        name, 
        age,
        email,
        cursos = []
    }){
        this.nombre = name;
        this.email = email
        this.edad = age;
        this.aprobar = cursos;
    }
    aprobarCurso (cursitos){
        this.aprobar.push(cursitos)
    }
}

//instancias

const persona = new students({
    name: "Arturo",
    email: "arturomadrigal@gmail.com",
    age: 14,
    cursos: ["curso de unreal engine"]
}); 

persona.aprobarCurso("curso de css")
persona.aprobarCurso("curso de html")
 
console.log(persona);

//-----------------------*------------------------//

//objeto literal
const juan1 = {
    name: "juan",
    user: "juanso10",
    poits: 200,
    socialMedia: {
        twitter: "i",
        instagram: "dim",
    },
    aprobarCurso1: [
        "curso definitivo de html y css",
        "curso pracico de html y css"
    ],
    learnPaths: [
        {
            name: "escuela de desarollo web",
            cursos: [
                "curso definitivo de html y css",
                "curso practico de html y css",
                "curso de responsive design"
            ],
        },
        {
            name: "escuela de desarollo de videojuegos",
            cursos: [
                "curso de produccion de videojuegos",
                "curso de unreal engine",
                "curso de c#"
            ],
        },
    ],
};

const juan2 = {
    name: "miguel",
    user: "xX_migel_Xx",
    poits: 13200,
    socialMedia: {
        twitter: "if",
        instagram: "dims",
    },

    aprobarCurso1: [
        "curso definitivo de html y css",
        "curso pracico de html y css"
    ],
    learnPaths: [
        {
            name: "escuela de desarollo web",
            cursos: [
                "curso definitivo de html y css",
                "curso practico de html y css",
                "curso de responsive design"
            ],
        },
        {
            name: "escuela de desarollo de videojuegos",
            cursos: [
                "curso de produccion de videojuegos",
                "curso de unreal engine",
                "curso de c#"
            ],
        },
    ],
};