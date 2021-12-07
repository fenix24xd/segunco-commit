function validar (){
  var nombre, apellidos , correo ,usuario ,clave ,telefono, expresion;
  nombre=documento. getElementById("nombre").value;
  apellidos=documento. getElementById("apellidos").value;
  correo=documento. getElementById("correo").value;
  usuario=documento. getElementById("usuario").value;
  clave=documento. getElementById("clave").value;
  telefono=documento. getElementById("telefono").value;
  
  expresion =/\w+@\w+\.+[a-z]/;

  

  
  if(nombre==="" || apellidos=== "" || correo==="" || usuario==="" ||clave==="" ||telefono===""){
      alert("todos los capos son obligatorios ");
      return false ;
  }
  else if (nombre.length>30){
    alert("el nombre es muy largo ");
    return false;
  }
  else if (apellidos.length>30){
    alert("los apellidos son muy largos ");
    return false;
  }
  else if (correo.length>100){
    alert("el correo es muy largo ");
    return false;
  }
  else if(!espresion.test(correo)){
    alert("el correo no es valido ");
    return false;
  }
  else if (usuario.length>20 || clave.length>20){
    alert("el usuario y lka clave deben tener solo 20 caracteres como maximo ");
    return false;
  
}