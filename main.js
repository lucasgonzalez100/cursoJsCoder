
const usuario = document.getElementById("usuario"),
   dni = document.getElementById("dni"),
   email = document.getElementById("email"),
   contraseña = document.getElementById("contraseña"),
   contraseña2 = document.getElementById("contraseña2"),
   crearPerfil = document.getElementById("crearPerfil"),
   alertas = document.getElementById("alarmas")

crearPerfil.addEventListener("click", validacionPerfil)

function validacionPerfil() {
   let alarmas = ""
   let entrar = false
   let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/

   alertas.innerHTML = ""

   if (usuario.value.length < 6) {
      alarmas += 'El nombre es muy corto <br>'
      entrar = true
   }

   if (dni.value.length < 8) {
      alarmas += 'El dni es muy corta <br>'
      entrar = true
   }

   if (!regexEmail.test(email.value)) {
      alarmas += 'El email es invalido <br>'
      entrar = true
   }

   if (contraseña.value < 6) {
      alarmas += 'La contraseña es muy corta deben ser al menos 6 caracteres <br>'
      entrar = true
   }

   if (contraseña2.value != contraseña.value) {
      alarmas += "Las contraseñas no coinciden <br>"
      entrar = true
   }

   if (entrar) {
      alertas.innerHTML = alarmas
   }
   else {
      alertas.innerHTML = "perfil creado "
      // guardarUsuario ()
   }
}


//   function guardarUsuario () {
//     let user = {usuario: usuario.value, contraseña: contraseña.value };
  
//             if (valor === "sessionStorage") { 
//                sessionStorage.setItem("item", JSON.stringify(user)); } 
//            if (valor === "localStorage") { 
//             localStorage.setItem("item", JSON.stringify(user)); 
//              return user}

//            function recuperarDatos() { 
//             if ( (usuario.value = datos.usuario) && (contraseña.value = datos.contraseña) ) { 
            
//             (JSON.parse(localStorage.getItem("item")));
//              sesionbtn.addEventListener("submit", (event) => {
//                 console.log(event.target); 
//                 event.preventDefault(); 
//                if (checkbox.checked) { guardar("localStorage"); } 
//                else { guardar("sessionStorage"); }});


ingresoPerfil = document.getElementById ("ingresoPerfil")


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

   else { calculoInteres()
   }
}

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
