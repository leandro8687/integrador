
function Login() {
    
    let user = document.getElementById('email').value;
    let password = document.getElementById('Password').value;

    let userDatabase = 'arg@prog.com';
    let passwordDatabase = '123456' //
    
    if (user == userDatabase && password == passwordDatabase) {
        window.location.href = './Admin.html'
    }else{
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Mail/Password es incorrecto!',
            footer: '<a href="./Login.html">Vuelva a Intentarlo</a>'
          });
    }
}