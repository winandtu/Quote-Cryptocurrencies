//instancio clases

const ui = new Interfaz();




//leer el formulario

const formulario = document.querySelector('#formulario');
const moneda = document.querySelector('#moneda');

const criptomoneda = document.querySelector('#criptomoneda');

cargarListeners();

function cargarListeners(){
    
    formulario.addEventListener('submit',ejecutarFormulario)

}

function ejecutarFormulario(e){
    e.preventDefault();
    //console.log('aaaa');
    const coin=obtenerMoneda(e);
    const cripto=obtenerCriptomoneda(e);

    if(coin==='' ||cripto===''){
        //console.log('faltan datos por llenar')
        ui.mostrarMensaje('Ambos Campos son obligatorios', 'alert bg-danger text-center');
    }else{
        console.log('esta todo bien')
        //console.log(coin)
        //console.log(cripto)
        api.calcularPrecio(coin, cripto)
            .then(data =>{
                console.log(data)
            }) 
    }
}


function obtenerMoneda(e){
    e.preventDefault();

    const monedaSeleccionada = moneda.options[moneda.selectedIndex].value //obtengo la moneda de las opciones que hay
    return monedaSeleccionada;
}


function obtenerCriptomoneda(e){
    e.preventDefault();
    
    const criptoSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value;

    return criptoSeleccionada;
}