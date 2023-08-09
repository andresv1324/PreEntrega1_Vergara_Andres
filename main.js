
let verificacion = false

//Ingreso en la plataforma
alert("Antes de subir las notas"+"\ndebera realizar un registro")

//Registro De Usuario y Contraseña

let userNombre = prompt("Ingrese su primer nombre")
let userPassword = prompt("Inrese una contraseña")

let codigo =Number(prompt("Ingrese el siguente codigo de verificacion"+"\n8628"))
 
verificacion = (codigo === 8628)

while(codigo !=8628){
    codigo =Number(prompt("Ingrese el siguente codigo de verificacion"+"\n8628"))
}
alert("Registro Exitoso")

//Inicio de Seccion

let nombre=prompt("Ingrese su nombre")
let password=prompt("Ingrese su contraseña")
let registro = false

while(registro !=true){
    if(userNombre==nombre && userPassword==password ){
        alert("Ingreso Aprobado")
        registro=true
        
    }else{
        alert("El nombre y/o contraseña"+"\nson invalidos")
        nombre=prompt("Ingrese su nombre")
        password=prompt("Ingrese su contraseña")
    }
}


//Ingreso de Informacion Del Alumno

let nombreAlumno = prompt("Ingrese nombre del Alumno")
let apellidoAlumno = prompt("Ingrese el apellido del Alumno")
let Alumno= nombreAlumno+ " " + apellidoAlumno

function notaAlumno(){
    alert("El estudiante "+ nombreAlumno+ " "+ apellidoAlumno + ", "+ " Obtuvo una nota de "+ notaFinal)
}

// Datos de notas
let next = false
let notaFinal = 0
let nota = 0
let i = 0
let carga = 1

alert("Estas por subir las notas del "+ Alumno )

while(next !=true){
    if(carga == 1){
        nota= Number(prompt("Ingrese la nota del Alumno"))
        carga = prompt("Desea continuar con mas notas"+"\n1 Para continuar"+"\n2 Para Finalizar")
        notaFinal = notaFinal + nota
        i++
    }else{
        notaFinal = notaFinal / i
        next = true
    }
}

if (notaFinal <= 4) {
    notaAlumno()
    alert("Reprobó")
} 
else if (notaFinal <= 6) {
    notaAlumno()
    alert("Deberá Realizar Un Recuperatorio")
} 
else if (notaFinal <= 10) {
    notaAlumno()
    alert("Aprobó La Cursada")
} 
else {
    alert("Carga incorrecta en las notas")
}