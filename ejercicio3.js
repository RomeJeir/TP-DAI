//a y b
const palos = ["Picas","Diamantes","Corazones","Treboles"]
let figuras = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
const mazo = [];
for(const palo of palos){
    const color = palo=== 'diamante' || palo ==='corazon' ? 'rojo' : 'negro'
    for(const figura of figuras){
        mazo.push({
            palo,
            figura,
            color,
        });
    }
}

console.log(mazo)

let count = 0;

for(const carta of mazo){
    if(carta.color === "negro" && carta.figuras % 2 === 0){
        count ++;
    }
}

console.log('Existen ' + count + ' cartas par y negras');

const carta_al_azar = (mazo) => Math.round(Math.random() * mazo.length)

const rndl = carta_al_azar(mazo);

console.log(rndl);

const eliminadas = []

for(let i = 1; i < 7; i++){
    eliminadas.push (carta_al_azar(mazo));
}

console.log(eliminadas)