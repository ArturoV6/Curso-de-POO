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
