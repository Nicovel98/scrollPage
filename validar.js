const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    code: /^.{2}$/, //area code
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^\d{7,14}$/ // 7 a 14 numeros.
};

function valForm(acciones) {
    acciones.preventDefault();

    let firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var areaCode = document.getElementById("areacode").value;
    var telNum = document.getElementById("telnum").value;
    var emailID = document.getElementById("emailid").value;
    var approve = document.getElementById("approve").checked;
    var feedBack = document.getElementById("feedback").value;

    if (firstName.length === 0 || expresiones.nombre.test(firstName) === false) {
        console.log(firstName);
        alert("error FirstName");
        return;
    }

    if (lastName.length == 0 || expresiones.nombre.test(lastName) == false) {
        alert("error LastName");
        return;
    }

    if (areaCode.length == 0 || expresiones.code.test(areaCode) == false) {
        alert("error country code");
        return;
    }

    if (telNum.length == 0 || expresiones.tel.test(telNum) == false) {
        alert("error telephone");
        return;
    }

    if (emailID.length == 0 || expresiones.correo.test(emailID) == false) {
        alert("error email");
        return;
    }


    if (!approve) {
        alert("error contact you");
        return;
    }


    if (feedBack.length == 0) {
        alert("error feedback");
        return;
    }

}

/*hecho por yomi*/
const btn = document.getElementById("btn");
btn.addEventListener('click', valForm);