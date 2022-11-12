
const interes = 18;
let monto = document.getElementById("monto")
cuota = document.getElementById("cuotas")
calcular = document.getElementById("calcular")
contenedorDinamico = document.getElementById("contenedorDinamico")

calcular.addEventListener("click", accionBtn)

function calculoInteres() {
   financiacion = interes * parseFloat(cuota.value);
   montoInteres = (financiacion / 100) * monto.value;
   cuotaFinal = (montoInteres + parseFloat(monto.value)) / cuota.value;
   montoCuotaConInteres = montoInteres + parseInt(monto.value);

   salidaResultado = "usted abonara " + cuota.value + " cuotas de $" + parseInt(cuotaFinal) + " monto final $" + parseFloat(montoCuotaConInteres)

   contenedorDinamico.innerHTML = salidaResultado
}

function accionBtn() {
   if ((monto.value < 1) || (cuota.value < 1)) {

      contenedorDinamico.innerHTML = "algunos de los valores es 0 o negativo"
   }

   else {
      calculoInteres()
   }
}