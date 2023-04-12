
const form = document.getElementById("form2");


function clickform() {  
  // Obtener los valores de los campos del formulario
  let nombre = document.getElementById('nombre1').value;
  let apellido = document.getElementById('apellido1').value;
  let telefono = document.getElementById('telefono1').value;
  let email = document.getElementById('email1').value;
  let comentarios = document.getElementById('comentarios1').value;
  

  // Borrar el contenido del formulario
  form.reset();
  
   Swal.fire({
    icon: 'success',
    title: 'Formulario Enviado con Exito!',
    text: 'Nuestro Staff lo contactara a la Brevedad!'
  }); 

  // Registrar los valores de los campos en la consola
  console.log(`Nombre: ${nombre} ${apellido}`);
  console.log(`Teléfono: ${telefono}`);
  console.log(`Email: ${email}`);
  console.log(`Comentarios: ${comentarios}`);
}