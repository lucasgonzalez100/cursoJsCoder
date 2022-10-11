
let dni = prompt ("ingrese su dni");
let monto = parseInt ( prompt  ("ingrese el monto a financiar"));
let cuota = parseInt ( prompt  ("ingrese la cantidad de cuotas "));
const interes = 18;

let montoCuotaConInteres = 0;


//let monto =  document.getElementById("monto").value;let cuota =  document.getElementById("cuotas").value;let dni =   document.getElementById("dni").value;

//let calcular = document.getElementById("calcular")calcular.addEventListener ("click", calculoInteres)


function calculoInteres(){
   financiacion = interes*  cuota
   montoInteres = (financiacion /100) *  monto
   cuotaFinal= (montoInteres+monto )/cuota
   montoCuotaConInteres= montoInteres+monto
   
   alert ("usted abonara " + cuota + " cuotas de " + cuotaFinal + " monto final " + montoCuotaConInteres )
    }

if ((monto == parseInt(monto) ) && (cuota == parseInt(cuota ) ))

{calculoInteres() }

 else {
   
   alert ("alguno de los valores ingresados no es valido") }


   class autos {
   
   constructor (marca,anio,version,color,kilometraje,estilo,precio ){
      this.marca = marca;
      this.anio = anio;
      this.version = version;
      this.color = color;
      this.kilometraje = kilometraje;
      this.estilo = estilo;
      this.precio = precio; 
   }
}


   const auto1 = new autos("chevrolet", 2020, "cruze", "gris", 18000, "cashback", 3000000)
   
   const autoUnico = { marca:"ford", anio:2015, version:"fiesta", color: "azul", kilometraje:50000, estilo:"sedan", precio:2500000 };

   console.log(auto1)
 
   console.log(autoUnico)
