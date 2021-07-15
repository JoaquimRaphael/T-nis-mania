var btnRegistar = document.getElementById("btnRegistrar")
btnRegistar.onclick = salvarEmail;

function salvarEmail(){
    var textEmail = document.getElementById("email");
    var email = textEmail.value;

    if(email == ''){

        alert("Por favor insira um email valido");

    }

    localStorage.setItem("email",email);

}