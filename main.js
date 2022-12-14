//carga de api y pintado en el dom
const apifetch = async () => {
   const url = "https://api.bluelytics.com.ar/v2/latest";
   const respuesta = await fetch(url);
   const datos = await respuesta.json();
   let htmlApi = `<div class="tabla_cambio">
   <div class="tabla_cambio_cu">
       <p id="cardApi"> el precio oficial del dolar es : <br>
           para compra: $${datos.oficial.value_buy} ,
           para venta : $${datos.oficial.value_sell} ,
           valor promedio: $${datos.oficial.value_avg}.</p>
   </div>
   <div class="tabla_cambio_cu">
       <p id="cardApi"> el precio del dolar blue es : <br>
           para compra: $${datos.blue.value_buy} ,
           para venta : $${datos.blue.value_sell} ,
           valor promedio: $${datos.blue.value_avg}.</p>
   </div>
</div>
`
   const cardApi = document.getElementById("cardApi")
   cardApi.innerHTML += htmlApi

}

apifetch()

//formulario de creacion de perfil 
let usuario = document.getElementById("usuario"),
   dni = document.getElementById("dni"),
   email = document.getElementById("email"),
   contraseña = document.getElementById("contraseña"),
   contraseña2 = document.getElementById("contraseña2"),
   //boton para crear perfil
   crearPerfil = document.getElementById("crearPerfil")
crearPerfil.addEventListener("click", validacionPerfil)
alertas = document.getElementById("alarmas")

function validacionPerfil() {
   let alarmas = ""
   let entrar = false
   let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/

   const user = { usuario: usuario.value, dni: dni.value, email: email.value, contraseña: contraseña.value, contraseña2: contraseña2.value }

   usuarioLocal = JSON.stringify(user);

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

      localStorage.setItem("nuevoPerfil", usuarioLocal);

      // localStorage.getItem("nuevoPerfil")
      // return
   }
}

// formulario de recuperacion de perfil e ingerso a la cuenta 

let ingresarPerfil = document.getElementById("ingresarPerfil")
ingresarPerfil.addEventListener("click", recuperoPerfil)

// formDisplay = document.getElementByid("displayNone")


function recuperoPerfil(e) {
   e.target.removeEventListener(e.type,recuperoPerfil )
 
   let formValidacion = document.getElementById("formValidacion")
   formTipiado = `
  <div  class="form_storage">
  <h2>ingresar a mi cuenta</h2>
  <form  class="form__all" action="">

  <div class="form-control"><label for="usuario">Usuario</label>
  <input required id="usuarioStorage" type="text" placeholder="nombre">
</div>

<div class="form-control"><label for="contraseñaStorage">Contraseña</label>
  <input required id="contraseñaStorage" type="password" placeholder="contraseña">

</div>

<button id="ingresarCuenta" class="boton__calcular" type="button">Ingresar</button>
</div>
  `
   divForm = document.createElement("div")
   divForm.innerHTML = formTipiado
   formValidacion.appendChild(divForm)

   let ingresarCuenta = document.getElementById("ingresarCuenta")
ingresarCuenta.addEventListener("click",igualarCuenta )
   }

// let ingresarCuenta = document.getElementById("ingresarCuenta")
// ingresarCuenta.addEventListener("click",igualarCuenta )

function igualarCuenta (){

  let perfilCreado = JSON.parse(localStorage.getItem("nuevoPerfil"))

   usuarioStorage = document.getElementById("usuarioStorage")
   contraseñaStorage =  document.getElementById("contraseñaStorage")

   if((usuarioStorage.value == perfilCreado.usuario ) && (contraseñaStorage.value == perfilCreado.contraseña ))
   {


      swal(`bienvenido! ${usuarioStorage.value} ` , "ingreso correcto", "success");

   }
   else{
      swal(" usuario y/o contraseña incorrectos!", "intente nuevamente !", "error");
   }

}


    



