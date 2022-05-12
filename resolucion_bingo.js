const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let cartones_del_juego;

let numeros_sacados = [];

let nombres = []

buscar_indice_nombre = (nombre) =>{

    if(nombre === undefined){
        res.send(cartones_del_juego);
        }else{
            let ind = null;
            for(let i = 0; i < nombre.length; i++){
                if(nombres[i] === nombre){
                    ind = i;
                }
            }
}

const random = () => {
    Math.random(Math.random() * num) + 1;
}

const crear_carton = (cantidad) =>{
    const carton = [];
} 

for(let i = 0; i < 15; i++) {
    cartones.push(random(100));
}
res.send(carton)

const crear_carton = (cantidad) =>{
    const carton = [];
} 

for(let i = 0; i < cantidad; i++) {
    cartones.push(crear_carton);
}
res.send(carton)

app.post("/numero_aleatorio", (req,res) => {
    const num = req.body.num
    res.send("El numero aleatorio es " + num);
})

app.post("/iniciar_juego", (req,res) => {
    const cantidad = req.body.cantidad
    const cartones = crear_carton();
    res.send(cartones_del_juego)
})

app.get("/obtener_carton", (req,res) => {
    const nombre = req.body.nombres;

    nombre.push(nombre);

    res.send(cartones_del_juego[nombres.length-1]);
})

app.get("/cartones", (req,res) => {
    const nombre = req.body.nombres;
    console.log(nombre);

    const llamar = buscar_indice_nombre(nombre)
  
        console.log(ind)

        res.send([ind])
    })

    const verificar_aciertos = (cartones) =>{

        let aciertos = 0;

        for(let i = 0; i< carton.length; i++) {

            const numero = carton[i];

            if(numeros_sacados.includes(numero)){

            }
        }
    }

    const verificar_ganador = (cartones) =>{

        let aciertos = 0;

        for(let i = 0; i< carton.length; i++) {

            const numero = carton[i];

            if(numeros_sacados.includes(numero)){
                aciertos++;
            }
        }
        return true
    }
app.get("sacar_cartones", (req,res) => {
    const numero = random();
    numeros_sacados.push(numeros)

    for(i = 0; i < cartones_del_juego.length; i++){
        const carton = cartones_del_juego[i];
        const ganador = verificar_ganador();

        if(ganador){
            ganadores.push(carton);
        }
    }
    res.send(ganador)
})
}