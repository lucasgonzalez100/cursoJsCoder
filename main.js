
//let autoElegido = prompt ("selecione su auto"),dni = prompt ("ingrese su dni"),monto = parseInt ( prompt  ("ingrese el monto a financiar")),cuota = parseInt ( prompt  ("ingrese la cantidad de cuotas "));

const interes = 18;

let monto = document.getElementById("monto")
cuota = document.getElementById("cuotas")
dni = document.getElementById("dni")

let calcular = document.getElementById("calcular")

calcular.addEventListener("click", accionBtn)

function calculoInteres() {
   financiacion = interes * cuota.value;
   montoInteres = (financiacion / 100) * monto.value;
   cuotaFinal = (montoInteres + parseFloat(monto.value)) / cuota.value;
   montoCuotaConInteres = montoInteres + parseInt(monto.value);

   alert("usted abonara " + cuota.value + " cuotas de " + cuotaFinal + " monto final " + montoCuotaConInteres)
}
 
function accionBtn () {
if ((monto.value < 1) || (cuota.value < 1)) { alert("alguno de los valores ingresados es negativo o cero") }

//else if ((monto.value === parseInt(monto.value)) && (cuota.value === parseInt(cuota.value))) { calculoInteres() }

else {

  calculoInteres()
}
}

// let contenedorResultado = document.createElement("div");

//contenedorResultado.innerHTML= "<h3> usted abonara + cuotas + de + cuotaFinal </h3>"



class autos {

   constructor(id, marca, anio, version, color, kilometraje, estilo, precio) {
      this.id = id;
      this.marca = marca;
      this.anio = anio;
      this.version = version;
      this.color = color;
      this.kilometraje = kilometraje;
      this.estilo = estilo;
      this.precio = precio;
   }
}


const auto1 = new autos(01, "chevrolet", 2020, "cruze", "gris", 18000, "cashback", 3000000)

const auto2 = new autos(02, "renault", 2018, "clio", "blanco", 80000, "cashback", 1200000)


const autoUnico = { id: 00, marca: "ford", anio: 2015, version: "fiesta", color: "azul", kilometraje: 50000, estilo: "sedan", precio: 2500000 };

console.log(auto1)
console.log(auto2)
console.log(autoUnico)
