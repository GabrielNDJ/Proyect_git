


const cantidadEntradas = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

const price = 200

botonCalcular.addEventListener('click',resumen)





function resumen(){
  

  console.log(categoria.value)

  console.log(cantidadEntradas.value)

  cantidadEntradas.value

  


  totalCompra.innerHTML=  "El total a pagar es: " + cantidadEntradas.value * ( price - ( price * categoria.value / 100 ) ) + " $" 
  

}




