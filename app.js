document.writeln("<h1>Clase 2</h1>")

// Array 

var arrayNumber = []

for(var i=0;i<20;i++){
    arrayNumber.push(i*2)
}
console.log(arrayNumber)

// foreach

var numbers = [21,8,5,15,44]
var add=0

numbers.forEach(addItems)

function addItems(item){
    add += item
    console.log(add)
}
console.log("la suma es",add)

//ejercicio

var alumno = ["Ana","Carlos","Javier","Pablo","Felipe"]
var notas = [6.7,4.5,5.5,6.6,7.0]

//mostrar el nombre y la nota del alumno con mayor nota, suponiendo que estan en orden

var last = [0.0,""]

for(var i=0;i<alumno.length;i++){
    if(notas[i] > last[0]){
        last[0] = notas[i]
        last[1] = alumno[i]
    }
}

console.log("El alumno con mayor nota es: ",last[1],"\ncon una nota de: ",last[0])