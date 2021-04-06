"use strict"

function validar() {

   let nombre:string = "";
   let apellido:string = "";
   let rut:string = "";
   let email:string = "";
   let numero:string = "";
   let error:string = "";
   let nivel:number = 0;
   let descripcion:string = "";

   let input_nombre:HTMLInputElement | null;
   let input_apellido:HTMLInputElement | null;
   let input_rut:HTMLInputElement | null;
   let input_email:HTMLInputElement | null;
   let input_numero:HTMLInputElement | null;
   let input_nivel:HTMLInputElement | null;
   let textarea:HTMLTextAreaElement | null;

   input_nombre = document.querySelector("input[name='nombre']");
   input_apellido = document.querySelector("input[name='apellido']");
   input_rut = document.querySelector("input[name='rut']");
   input_email = document.querySelector("input[name='email']");
   input_numero = document.querySelector("input[name='telefono']");
   input_nivel = document.querySelector("input[name='nivel']");
   textarea = document.querySelector("textarea[name='descripcion']");

   if( input_nombre !== null )   nombre = input_nombre.value;
   if( input_apellido !== null ) apellido = input_apellido.value;
   if( input_rut !== null )      rut = input_rut.value;
   if( input_email !== null )    email = input_email.value;
   if( input_numero !== null )   numero = input_numero.value;
   if( input_nivel !== null )    nivel = parseInt(input_nivel.value);
   if( textarea !== null )       descripcion = textarea.value;

   if( nombre.length === 0 )
      error += "Error, debe ingresar su nombre. ";

   if( apellido.length === 0 )
      error += "\nError, debe ingresar su apellido. ";

   if( descripcion.length === 0 )
      error += "\nError, debe escribir una descripción de usted. ";
   else if( descripcion.length > 300 )
      error += "\nError, la descripcion no debe tener mas de 300 caracteres. ";

   let rut_regex:RegExp = /^[0-9]{7,8}\-[0-9Kk]$/;
   if( rut.length === 0 )
      error += "\nError, debe ingresar su rut. ";
   else if( rut.match(rut_regex) == null )
      error += "\nError, el rut es invalido. ";

   /*
   let email_regex:RegExp = /^([A-Za-z0-9]+\.?_?)+@[A-Za-z]+\.[A-Za-z]{2,3}$/
   if( email.length === 0 )
      error += "\nError, debe ingresar su correo electronico. ";
   else if( email.match(email_regex) == null )
      error += "\nError, el correo electronico es invalido. ";
   */

   if( numero.length === 0 )
      error += "\nError, debe ingresar su numero de teléfono. ";
   else if( numero.length !== 9 )
      error += "\nError, el numero de teléfono debe tener 9 digitos. ";

   let checkboxes:NodeList | null;
   checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
   if( checkboxes !== null )
      if( checkboxes.length === 0 )
         error += "\nError, debe elegir al menos un lenguaje de programacion. ";

   let radio:Element | null;
   radio = document.querySelector("input[type='radio']:checked");
   if( radio === null )
      error += "\nError, debe elegir sus años de experiencia. ";

   if( error.length > 0 ) alert(error);
   else {
      let form:HTMLElement | null = document.getElementById("formulario");
      let msg:HTMLElement | null = document.getElementById("msg");

      if( form != null )
         form.style.display = "none";
      if( msg != null )
         msg.style.display = "block";
   }
}

function limpiarDatos(e:Event) {
   e.preventDefault();

   let input_nombre:HTMLInputElement | null;
   let input_apellido:HTMLInputElement | null;
   let input_rut:HTMLInputElement | null;
   let input_email:HTMLInputElement | null;
   let input_numero:HTMLInputElement | null;
   let textarea:HTMLTextAreaElement | null;

   input_nombre = document.querySelector("input[name='nombre']");
   input_apellido = document.querySelector("input[name='apellido']");
   input_rut = document.querySelector("input[name='rut']");
   input_email = document.querySelector("input[name='email']");
   input_numero = document.querySelector("input[name='telefono']");
   textarea = document.querySelector("textarea[name='descripcion']");

   if( input_nombre !== null ) input_nombre.value = "";
   if( input_apellido !== null ) input_apellido.value = "";
   if( input_rut !== null ) input_rut.value = "";
   if( input_email !== null ) input_email.value = "";
   if( input_numero !== null ) input_numero.value = "";
   if( textarea !== null ) textarea.value = "";

   let checkboxes:NodeList | null;
   checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
   if( checkboxes !== null ) {
      for(let i = 0; i < checkboxes.length; i++) {
         let checkbox:HTMLInputElement = checkboxes[i] as HTMLInputElement;
         checkbox.checked = false;
      }
   }

   let radio:HTMLInputElement | null;
   radio = document.querySelector("input[type='radio']:checked") as HTMLInputElement;
   if( radio !== null )
      radio.checked = false;
}

function start() {
   let limpiar:HTMLElement | null;

   limpiar = document.getElementById("limpiar");
   if( limpiar !== null )
      limpiar.addEventListener("click", limpiarDatos, false);

   window.addEventListener("submit", validar);
}
