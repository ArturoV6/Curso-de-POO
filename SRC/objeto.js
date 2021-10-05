class estudiante {
    constructor(nombre, edad, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.info = `mi nombre es ${this.nombre} mi edad es ${this.edad} y mi altura es de ${this.altura}`
    }
    verInfo(){
        console.log(this.info)
    }
}

let persona = new estudiante("carlos", 16, "1.60");
let persona2 = new estudiante("Fulano", 18, "3.00");

persona.verInfo();
persona2.verInfo();

function estudiantes(nombre, edad, puntos) {
    this.name = nombre;
    this.age = edad;
    this.points = puntos;
    this.info = `mi nombre es ${this.name}, mi edad es ${this.age} y eso ${this.points}`
    console.log(this.info);
}

const juanita = new estudiantes("juanita", 20, 235);