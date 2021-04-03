let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensaje");
let nombre = formulario.elements[0]
let apellidos = formulario.elements[1]
let rut = formulario.elements[2]
let email = formulario.elements[3]
let telefono = formulario.elements[4]
let nivelProgra=formulario.elements[11]
let descripcion=formulario.elements[17]
formulario.addEventListener("submit",function(evento:any){
    
    if(validarRadio() && validarCheckbox() && validarDatos()){
        formulario.style.display="none"
        mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted"
        mensaje.style.color="#ff0000"
    }
    evento.preventDefault();
});

//Expresiones regulares para verificar datos
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    rut: /^[0-9]+-[0-9 k K]{1}$/,
	telefono: /^\d{9}$/, // 9 numeros.
    descripcion: /.{1,300}$/ // 1 a 300 caracteres numeros.
}


//validacion de que al menos una casilla del tipo radio este marcada
function validarRadio(){
   const x = formulario.elements.nivel
   if(x.value!=""){
       
       return true;
   }else{
       alert("tiene que tener al menos un año de experiencia")
       return false;
   }
}
//validacion de que al menos una casilla del checkbox este marcada
function validarCheckbox(){
    let valido = false;
    const py=document.getElementById("python") as HTMLInputElement
    const jav=document.getElementById("java") as HTMLInputElement
    const ts=document.getElementById("typescript") as HTMLInputElement
    const php=document.getElementById("php") as HTMLInputElement
    const csharp=document.getElementById("csharp") as HTMLInputElement
    const cmas=document.getElementById("cmas") as HTMLInputElement
    if (py.checked){
        valido=true;
    }else if(jav.checked){
        valido=true;
    }else if(ts.checked){
        valido=true;
    }else if(php.checked){
        valido=true;
    }else if(csharp.checked){
        valido=true;
    }else if (cmas.checked){
        valido=true;
    }

    if(valido){
        console.log("checkbox validado")
    }else{
        alert("Tiene que seleccionar al menos 1 lenguaje")
    }
    return valido;
}

//validacion de los datos mediante las expresiones regulares
function validarDatos(){
    if(expresiones.nombre.test(nombre.value)&&expresiones.apellidos.test(apellidos.value)&&expresiones.rut.test(rut.value)
    && expresiones.email.test(email.value)&&expresiones.telefono.test(telefono.value) && expresiones.descripcion.test(descripcion.value)){
        console.log("datos validados")
        return true
    }else{
        if(expresiones.nombre.test(nombre.value)==false){
            alert("el nombre debe tener caracteres permitidos")
        }
        if(expresiones.apellidos.test(apellidos.value)==false){
            alert("los apellidos deben tener caracteres permitidos")
        }
        if(expresiones.rut.test(rut.value)==false){
            alert("El rut no debe llevar puntos y incluir el guion con el digito verificador")
        }
        if(expresiones.email.test(email.value)==false){
            alert("Ingrese el email correctamente")
        }
        if(expresiones.telefono.test(telefono.value)==false){
            alert("El telefono debe tener 9 digitos")
        }
        if(expresiones.descripcion.test(descripcion.value)==false){
            alert("La descripcion es obligatoria, y debe tener como maximo 300 caracteres!")
        }
        return false
    }
}

//funcion que limpia el formulario
function limpiarDatos (){
   formulario.reset();
}