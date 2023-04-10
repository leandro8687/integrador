

function Login() {
    
    let user = document.getElementById('email').value;
    let password = document.getElementById('Password').value;

    let userDatabase = 'ruben.montero@amway.com';
    let passwordDatabase = '123456' //
    
    if (user == userDatabase && password == passwordDatabase) {
        alert('Ingresando a Portal');
        window.location.href = './admin.html'
    }else{

        alert('Error en Mail o Password');
        window.location.href = './Login.html'
    }
}