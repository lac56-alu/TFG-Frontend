function Validation(values) {
    let error = {}
    const email_patern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email[0] === ""){
        error.email = "El email no puede estar vacio."
    } else if(!email_patern.test(values.email)){
        error.email = "El formato del email no es correcto."
    } else {
        error.email = ""
    }

    if(values.password[0] === ""){
        error.password = "La contraseña no puede estar vacia."
    } else if(!password_pattern.test(values.password)){
        error.password = "La contraseña tiene un formato incorrecto."
        //error.password = "La contraseña no cumple con nuestros estándares de seguridad, mínimo una mayúscula y un número requerridos."
    } else {
        error.password = ""
    }
    
    return error;
}

export default Validation;