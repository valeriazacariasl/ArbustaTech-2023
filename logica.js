/* 3-
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Jugador 1", "Jugador 2", "Empate" 
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Jugador 2".
 */

const quienGano = (jugadas) => {
    // Verifica que la lista tenga al menos una partida
    if (jugadas.length < 1) {
        console.log("La lista debe tener al menos una partida");
        return;
    }

    const movimiento = { R: true, P: true, S: true };
    let jugador1Gana = 0;
    let jugador2Gana = 0;

    for (let i = 0; i < jugadas.length; i++) {
        const jugada = jugadas[i];

        const movJugador1 = jugada[0];
        const movJugador2 = jugada[1];

        // Verifica que las jugadas sean válidas
        if (!movimiento[movJugador1] || !movimiento[movJugador2]) {
            console.log(`La partida ${i + 1} contiene una jugadas inválida`);
            return;
        }

        // Calcula el ganador de la partida
        if (movJugador1 === movJugador2) {
            // Empate
        } else if (
            (movJugador1 === "R" && movJugador2 === "S") ||
            (movJugador1 === "P" && movJugador2 === "R") ||
            (movJugador1 === "S" && movJugador2 === "P")
        ) {
            jugador1Gana++;
        } else {
            jugador2Gana++;
        }
    }

    // Calcula el ganador del juego
    if (jugador1Gana > jugador2Gana) {
        console.log("Jugador 1 gana");
    } else if (jugador1Gana < jugador2Gana) {
        console.log("Jugador 2 gana");
    } else {
        console.log("Empate");
    }
}

const jugadas = [["R", "S"], ["S", "R"], ["S", "S"]];
quienGano(jugadas);

/*4-
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que 
 *   lo resuelvan directamente.
 */

const calcularMCD = (a, b) => {
    let resto;
    while (b !== 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

console.log(calcularMCD(12,16));

const calcularMCM = (a, b) => {
    return (a * b) / calcularMCD(a, b);
}

console.log(calcularMCM(3,4));

/* 5-
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

const convertirAMilisegundos = (dias, horas, minutos, segundos) => {
    const milisegPorSegundo = 1000;
    const milisegPorMinuto = 60 * milisegPorSegundo;
    const milisegPorHora = 60 * milisegPorMinuto;
    const milisegPorDia = 24 * milisegPorHora;

    // Convertir los tiempos a milisegundos
    const diasEnMs = dias * milisegPorDia;
    const horasEnMs = horas * milisegPorHora;
    const minutosEnMs = minutos * milisegPorMinuto;
    const segundosEnMs = segundos * milisegPorSegundo;

    // Sumar los tiempos en milisegundos
    const totalMs = diasEnMs + horasEnMs + minutosEnMs + segundosEnMs;

    return totalMs;
}


console.log(convertirAMilisegundos(1, 2, 30, 15));

/* 6-
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente. son sin usar metodos o funciones
 */



const convertirPrimeraLetMayus = (string) => {

    const palabras = string.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }

    return palabras.join(" ");
}


console.log(convertirPrimeraLetMayus("hola, como estan"));

