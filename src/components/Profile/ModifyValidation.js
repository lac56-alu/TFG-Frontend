function Validation(values) {
    let error = {}
    const name_pattern = /^[a-zA-Z]+$/
    const lastname_pattern = /^[a-zA-Z\s]+$/
    const adress_pattern = /^[0-9a-zA-Z\s]+$/
    const dni_pattern = /^\d{8}[a-zA-Z]$/
    const nie_pattern = /^[XYZ]\d{7,8}[A-Z]$/
    const telephone_pattern = /^[0-9]{9}$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = "El nombre no puede estar vacio."
    } else if(!name_pattern.test(values.name)){
        error.name = "El formato del nombre no es correcto."
    } else {
        error.name = ""
    }

    if(values.lastname === ""){
        error.lastname = "El apellido no puede estar vacio."
    } else if(!lastname_pattern.test(values.lastname)){
        error.lastname = "El formato del apellido no es correcto."
    } else {
        error.lastname = ""
    }

    if(values.identity_document === ""){
        error.identity_document = "El DNI O NIE no puede estar vacio."
    } else if(!dni_pattern.test(values.identity_document) && !nie_pattern.test(values.identity_document)){
        error.identity_document = "El formato del DNI O NIE no es correcto."
    } else {
        error.identity_document = ""
    }

    if(values.telephone === ""){
        error.telephone = "El teléfono no puede estar vacio."
    } else if(!telephone_pattern.test(values.telephone)){
        error.telephone = "El formato del teléfono no es correcto."
    } else {
        error.telephone = ""
    }

    if(values.adress === ""){
        error.adress = "La dirección no puede estar vacio."
    } else if(!adress_pattern.test(values.adress)){
        error.adress = "El formato de la dirección no es correcto."
    } else {
        error.adress = ""
    }

    if(values.email === ""){
        error.email = "El email no puede estar vacio."
    } else if(!email_pattern.test(values.email)){
        error.email = "El formato del email no es correcto."
    } else {
        error.email = ""
    }

    if(values.password1 === ""){
        error.password1 = "La contraseña no puede estar vacia."
    } else if(!password_pattern.test(values.password1)){
        error.password1 = "La contraseña tiene un formato incorrecto."
        //error.password = "La contraseña no cumple con nuestros estándares de seguridad, mínimo una mayúscula y un número requerridos."
    } else {
        error.password1 = ""
    }

    if(values.password2 === ""){
        error.password1 = "La confirmación de contraseña no puede estar vacia."
    } else if(!password_pattern.test(values.password2)){
        error.password2 = "La contraseña tiene un formato incorrecto."
        //error.password = "La contraseña no cumple con nuestros estándares de seguridad, mínimo una mayúscula y un número requerridos."
    } else if(values.password1 == values.password2){
        error.password2 = ""
        //error.password = "La contraseña no cumple con nuestros estándares de seguridad, mínimo una mayúscula y un número requerridos."
    } else {
        console.log(values.password1, " ---- ", values.password2)
        error.password2 = "Las contraseñas no coinciden."
    }
    
    return error;
}

export default Validation;