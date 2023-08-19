
let midNumber=(lim_max,lim_min)=> {
  return  Math.floor((lim_max + lim_min) / 2); //seleccionamos el elemento de en medio
 }

  let midNum= 0;
  let lim_min = 0;
  let lim_max = 100;
  let flag = false; // flag para
 
  
  while(!flag){
    midNum =midNumber(lim_max,lim_min);// buscamos el elemento de en medio.
    if(confirm(`tu num es ${midNum}?`)){
    document.getElementById("respuesta").innerHTML = `tu num es: ${midNum}`; // imprimimos en el dom el numero ganador
    flag=true;
    break;
    }else{
      if(confirm(`El numero es mayor a (>) ${midNum}?`)){
        lim_min=midNum;
      }else{
        lim_max=midNum;
      }

    }

  }
 