
let autoElegido = prompt ("selecione su auto"),
  dni = prompt ("ingrese su dni"),
monto = parseInt ( prompt  ("ingrese el monto a financiar")),
cuota = parseInt ( prompt  ("ingrese la cantidad de cuotas "));
const interes = 18;


//let monto =  document.getElementById("monto").value, cuota =  document.getElementById("cuotas").value, dni =   document.getElementById("dni").value;

//let calcular = document.getElementById("calcular")


function calculoInteres(){
   financiacion = interes*  cuota
   montoInteres = (financiacion /100) *  monto
   cuotaFinal= (montoInteres+monto )/cuota
   montoCuotaConInteres= montoInteres+monto
   
   alert ("usted abonara " + cuota + " cuotas de " + cuotaFinal + " monto final " + montoCuotaConInteres )}
  // let contenedorResultado = document.createElement("div");

   //contenedorResultado.innerHTML= "<h3> usted abonara + cuotas + de + cuotaFinal </h3>"

if ((monto == parseInt(monto) ) && (cuota == parseInt(cuota ) ))

{calculoInteres() }

 else {
   
   alert ("alguno de los valores ingresados no es valido") }

calcular.addEventListener ("click", calculoInteres)


class autos {
   
   constructor (id, marca,anio,version,color,kilometraje,estilo,precio ){
      this.id = id ;    
      this.marca = marca;
      this.anio = anio;
      this.version = version;
      this.color = color;
      this.kilometraje = kilometraje;
      this.estilo = estilo;
      this.precio = precio; 
   }
}


   const auto1 = new autos( 01 ,"chevrolet", 2020, "cruze", "gris", 18000, "cashback", 3000000)

   const auto2 = new autos(02 ,"renault", 2018, "clio", "blanco", 80000, "cashback", 1200000)

   
   const autoUnico = {id:00, marca:"ford", anio:2015, version:"fiesta", color: "azul", kilometraje:50000, estilo:"sedan", precio:2500000 };

   console.log(auto1)
   console.log(auto2)
   
 
   console.log(autoUnico)
