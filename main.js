
   const  apifetch = async ()=>{
  const url = "https://api.bluelytics.com.ar/v2/latest";
   const respuesta = await fetch(url) ;
   const datos = await respuesta.json();
   console.log (datos)
   console.log (datos.oficial)
   console.log (datos.oficial.value_buy)
   
   crearHtml(datos)

  }


 function crearHtml (){
   
containerDinamico = ducument.getElementById ("containerDinamicoApi")

let htmlApi = `<p> hola ${oficial.value_buy}</p>
   <p>${oficial.value_sell}</p>
   <p>${oficial.value_avg}</p> `

 containerDinamico.innerHTML += htmlApi;}
  

  apifetch ()




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

      localStorage.getItem("nuevoPerfil")
      return
   }
}

// formulario de recuperacion de perfil e ingerso a la cuenta 

let formLogin = document.getElementById("formLogin")
ingresarPerfil = document.getElementById("ingresarPerfil")
ingresarPerfil.addEventListener("click", recuperoPerfil)

// formDisplay = document.getElementByid("displayNone")



function recuperoPerfil() {

   ingresarPerfil.classList.remove("display__none")

   let formLo = ""
   formDisplay.classList.remove("display__none")

   formLogin.innerHTML = formLo

   //   cuenta =  localStorage.getItem ("nuevoPerfil")

   //   cuentaLogin = JSON.parse(cuenta)

   //    console.log (cuentaLogin)

}
// carga de api con valores de dolar 
// ID : 7fd7ae1455876d5c767bdfbda953c898 CONTEXTO : fintech/ar/bcra/dolar_value 
// https://cont.certisend.com/web/container/api/v1/fintech/ar/bcra/dolar_value




