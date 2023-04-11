

const rutaArchivo = '..\\js\\usuarios.json';

fetch(rutaArchivo)
  .then(response => response.blob())
  .then(blob => {
    const lector = new FileReader();
    lector.addEventListener('load', function() {
      const data = JSON.parse(lector.result);

    const miTabla = document.querySelector('#tablausuarios tbody');

    data.results.forEach((persona => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${persona.id}</td>
            <td><img src="${persona.image}" class="imgadmin"></td>
            <td>${persona.name}</td>
            <td>${persona.status}</td>
            <td>${persona.mail}</td>
            <td>${persona.password}</td>
        `;

        miTabla.appendChild(row);
    }));
});

lector.readAsText(blob);
  })
 .catch(error => {
    console.log('Error en el consumo de datos', error); 
}) 
 


