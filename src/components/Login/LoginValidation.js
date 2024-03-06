function Validation(values) {
    //alert("LOGIN VALIDATION")

    let error = {}
    const email_patern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "El email no puede estar vacio."
    } else if(!email_patern.test(values.email)){
        error.email = "El formato del email no es correcto."
    } else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "La contraseña no puede estar vacia."
    } else if(!password_pattern.test(values.password)){
        error.password = "La contraseña no cumple con nuestros estándares de seguridad, mínimo una mayúscula y un número requerridos."
    } else {
        error.password = ""
    }

    console.log(error);
    return error;
}

export default Validation;