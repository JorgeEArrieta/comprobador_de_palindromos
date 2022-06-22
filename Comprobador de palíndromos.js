function palindrome(str) {
  
    // Array que guarda donde estan los espacios
    let space = [];
    // Guarda los caracteres de la cadena de texto
    let cadena = [];
    // Guarda el texto a comparar
    var texto= "";
  
    // Busqueda regex
    let pattern = /[a-zA-Z0-9 ]/g;

    //Pone todos los caracteres en minuscula.
    str = str.toLowerCase()
    
    // Modifica la cadena de texto.
    for(let i = 0; i < str.length; i++){
      if (str[i].match(pattern)){
        texto += str[i];
        // Guarda la cadena de texto sin espacios
        if(str[i] != " "){
          cadena.push(str[i]);
        }
      }
    }

    //Guarda los espacios.
    for(let i = 0; i < texto.length; i++){
      if(texto[i] == " "){
        space.push(i);
      }
    }
    
    //Salida de texto
    //console.log(cadena);

    // Variable que guarda el texto invertido.
    let resultado = "";

    //Solución.
    for (let i = 0; i < texto.length; i++){
      // Largo del array que guarda los caracteres.
      // Variable que guarda el número en que se ubica el espacio.
      
      let espacio = undefined;
      
      for(let n = 0; n < space.length; n++){
        if(i == space[n]){
          espacio = i;
          break
        }
      }

      if(espacio == i){
        resultado += " ";
      }else{
        let ultimo = cadena.length - 1;
        //console.log(cadena[ultimo]);
        resultado += cadena[ultimo];
        cadena.pop();
      }

    }
    
    if(texto === resultado){
      return true
    }else{
      return false
    }
  
  }
  
  console.log(palindrome("1 eye for of 1 eye."));