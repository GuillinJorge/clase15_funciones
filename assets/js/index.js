console.log("Hola mundo")

//Calculadora

let firstNumber = 1 //prompt("Ingrese el valor #1")
let secondNumber = 2 //prompt("Ingrese el valor #2")

/**
 * Esta función realiza una suma
 * Params: n1 & n2
 * return sum(n1,n2)
 * /
*/
const sumaDeNumeros = (n1, n2) => n1 + n2

const restaDeNumeros = (n1, n2) => n1 - n2

const multiplicateNumbers = (n1, n2) => n1 * n2

const divisionNumbers = (n1, n2) => n1 / n2


const pageWriter = (operacionImprimir, valor) => {
    let textoImprimir = `<h2>La ${operacionImprimir} total es de: ${valor}</h2>`
    document.write(textoImprimir)
    return null
}

let sumaTotal = sumaDeNumeros(firstNumber, secondNumber)
let restaTotal = restaDeNumeros(firstNumber, secondNumber)
let multiplicacionTotal = multiplicateNumbers (firstNumber, secondNumber)
let divisionTotal = divisionNumbers (firstNumber, secondNumber)


//pageWriter("suma", sumaTotal)
//pageWriter("resta", restaTotal)
//pageWriter("multiplicación", multiplicacionTotal)
//pageWriter("división", divisionTotal)

//restaDeNumeros(firstNumber,secondNumber)

//document.writeln (`<h2>La suma total es de: ${sumaTotal}</h2>`)

//document.writeln (`<h2>La resta total es de: ${restaDeNumeros(firstNumber, secondNumber)}</h2>`)



function tomarNumbers(){
    let number = prompt("Número a ingresar")
    return Number(number)
}

function pedirOperacion() {
    let operacion = prompt(
        `
        1 - suma
        2 - resta
        3 - multiplicacion
        4 - division
        5 - salir
        `
    )
    return operacion
}

function realizarCalculo(fnCalculo, n1, n2){
    return fnCalculo(n1, n2)
}

const imprimirCalculo = pageWriter



function main(){
    document.write(
        `
        <h2>Vas a hacer una calculadora de manera manual</h2>
        <p>
        Deberas ingresar las opciones de:
        <li>1 - Suma</li>
        <li>2 - Resta</li>
        <li>3 - Multiplicación</li>
        <li>4 - División</li>
        <li>5 - Salir</li>
        </p> 
    
        `
    )
   
   let operacion = pedirOperacion()

   let n1 = tomarNumbers()
   let n2 = tomarNumbers()

   let operacionMatematica
   let nombreOperacion
   
   if (operacion == 1) {
       operacionMatematica = sumaDeNumeros
       nombreOperacion = "suma"
   }
   else if (operacion == 2) {
        operacionMatematica = restaDeNumeros
        nombreOperacion = "resta"
    }
    else if (operacion == 3){
        operacionMatematica = multiplicateNumbers
        nombreOperacion = "multiplicacion"
    }
   else if (operacion == 4){
        operacionMatematica = divisionNumbers
        nombreOperacion = "division"
   }
   else {
        operacionMatematica = (n1, n2) => null
        nombreOperacion = "salir"
    }
    
    let resultado = realizarCalculo(operacionMatematica, n1, n2)
    imprimirCalculo(nombreOperacion, resultado) 
}


main()