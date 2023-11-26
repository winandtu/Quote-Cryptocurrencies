//https://www.cryptocompare.com/cryptopian/api-keys

class cotizarCripto{
    //constructor

    constructor(apiKey){
        this.apiKey=apiKey;
    }

    async obtenerMonedas(){

        //url para obtener todas las monedas
        const url= `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`

        const moneda = await fetch(url); //buscar
        const res = moneda.json(); //respuesta

        return res
    }

    async calcularPrecio(moneda, cripto){

        this.moneda = moneda;
        this.cripto = cripto;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.cripto}&tsyms=${this.moneda}&api_key=${this.apiKey}`;

        const datos = await fetch(url); 

        const res = await datos.json();

        //console.log(res);
        return res;
    }
}