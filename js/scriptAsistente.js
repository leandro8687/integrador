const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");






//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {


  if (!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("telefono").value || !document.getElementById("servicio").value) {
    alert("Por favor complete todos los campos obligatorios.");
  } else {
  
  // recopilar datos del primer paso
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let telefono = document.querySelector("#telefono").value;
  let servicio = document.querySelector("#servicio").value;


  
  // mostrar resumen en el segundo paso
  summary.innerHTML =`Nombre: ${name}<br>
                      Email: ${email}<br>
                      Telefono: ${telefono} <br>
                      Servicio: ${servicio}
                      `;

                      
  


  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
  asistente.style.display = "none"
}

});





//codigo boton volver

backBtn.addEventListener("click", function() {
  window.history.back();

  step1.style.display = "block";
  step2.style.display = "none";
});



//CONVERTIR A PDF

//agregar evento onclick al botón PDF
const pdfBtn = document.querySelector("#pdf-btn");
pdfBtn.addEventListener("click", function() {
  // obtener el elemento que se va a convertir en PDF
  const form = document.querySelector("#resumen");
  
  // configurar las opciones de conversión
  const options = {
    filename: 'Presupuesto-AMBAR.pdf',
    margin: [1, 1, 1, 1],
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 30 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  // convertir el elemento en PDF y descargar el archivo
  html2pdf().set(options).from(form).save();
});




