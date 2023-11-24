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
}