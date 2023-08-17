function adivinaNumero() {
  let midNumber = 0;
  let lim_min = 0;
  let lim_max = 100;
  let flag = false; // flag para
  midNumber =lim_max- Math.floor((lim_max - lim_min) / 2); //seleccionamos el elemento de en medio
  text = `tu num es: ${midNumber}?`; // cadenna prototipo para avisar el numero adivinano1

  do {
   

    if (confirm(`tu num se encuentra entre ${midNumber} y ${lim_max}?`)) {
      lim_min=midNumber;
      midNumber=lim_max - Math.floor((lim_max - lim_min) / 2);
      if (confirm(`${text} ?`)) { // tu numero es X?
        // confirmar elemento adivinado
        document.getElementById("respuesta").innerHTML = text;
        flag = true;
      }
    } else {
      // Caso donde el numero se encuentra en el lado izquierdo de los numeros 
      lim_max=m(midNumber-1)-lim_min;
      midNumber=Math.floor((lim_max-lim_min)/2);
      if (confirm(`${text} ?`)) { // tu numero es X?
        // confirmar elemento adivinado
        document.getElementById("respuesta").innerHTML = text;
        flag = true;
      }

    }
  } while (!flag);
}
