/*se hara esto 
<div class="alert bg-danger text-center">
  Este es un mensaje de error centrado.
</div>
 */

class Interfaz{

    mostrarMensaje(mensaje,clases){
        
        //creamos un elemento div

        const div = document.createElement('div');
        div.className=clases;

        div.appendChild(document.createTextNode(mensaje));

        const divMensaje= document.querySelector('.mensajes');

        //agrego el div creado a un div que ya esta en el Dom:
        divMensaje.appendChild(div);

        //desaparecer el mensaje despues de 3 seg:
        //hace la consulta en la clase mensajes, luego selecciona el elemento div y lo borra.
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },3000);
        
    }
}