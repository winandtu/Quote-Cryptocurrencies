/*se hara esto 
<div class="alert bg-danger text-center">
  Este es un mensaje de error centrado.
</div>
 */
const api = new cotizarCripto('ae4732b6373672e7d7b685ba6deb03f8b654adff296923f83c7fbf40c73b4325');

class Interfaz{

    //constructor iniciado
    constructor(){
        this.init()
    }


    //hago el select para las criptos en la interfaz

    init(){
        this.construirSelect();
    }

    construirSelect(){
        api.obtenerMonedas()
        .then(moneda=> {
            //console.log(moneda.Data); //datos de la moneda

            //recorrer objetos: Objetos.entries convierte en arreglos
            //console.log(Object.entries(moneda.Data));
            //recorrer los objetos y extraer la llave valor

            const menuCripto = document.querySelector('#criptomoneda');
            for(const [key, value] of Object.entries(moneda.Data)){
                //console.log(value.Symbol); simbolo
                //console.log(value.CoinName); Nombre
                //agrego los simbolos de las monedas en las opciones del dom

                const opcion = document.createElement('option'); //creo elemento de opcion

                opcion.value=value.Symbol; //inicializo el valor de la opcion

                //creo el texto que ira en el div
                const textoMoneda= document.createTextNode(value.CoinName)
                //agrego el nombre de la moneda a las opciones
                opcion.appendChild(textoMoneda);
                //console.log(opcion);

                //agrego las opciones con su texto al DOm en el div de criptomoneda para que se vea en la interfaz:

                menuCripto.appendChild(opcion);

            }
        })
    }

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

    mostrarResultado(){

        const resultadoDiv = document.getElementById('resultado');
        
    }
}