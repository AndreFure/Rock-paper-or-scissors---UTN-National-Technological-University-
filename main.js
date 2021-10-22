
let userScore = 0;
let compScore = 0;
let userGana = ("Ganaste");
let compGana = ("Yo gano");
let empatamos = ("Empatamos");
let nivelDosComp = ("Que bodrio, gané de nuevo");
let nivelDosUser = ("Miralo a este, ganaste");
let finComp = ("Gane el juego");
let finUser = ("Perdi");
let comPartida = ("Piedra, papel o tijera, Ya!");
let start = ("Elegi tu Jugada");

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("marcador");
const indic_span = document.getElementById("indic");
const result_div = document.querySelector(".result p");
const piedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tijera_div = document.getElementById("t");

function movidaComp() {
  const opciones = ["r", "p", "t"];
  const random = Math.floor(Math.random() * 3);
  const movida = opciones[random];
  return (movida);
}

if (compScore == 10) {
  result_div.innerHTML = finComp;
  let userScore = 0;
  let compScore = 0;
}

function ganar(opcionUser, opcionPc) {
  indic_span.innerHTML = comPartida;
  indic_span.innerHTML = start;
  userScore++;
  userScore_span.innerHTML = userScore;
  if (userScore == 5) {
    result_div.innerHTML = nivelDosUser;
  } else {
    if (userScore === 10) {
      result_div.innerHTML = finUser;
      userScore = 0;
      compScore = 0;
    } else {
      result_div.innerHTML = userGana;
    }
  }
}
function pierda(opcionUser, opcionPc) {
  indic_span.innerHTML = comPartida;
  indic_span.innerHTML = start;
  compScore++;
  compScore_span.innerHTML = compScore;
  if (compScore == 5) {
    result_div.innerHTML = nivelDosComp;
  } else {
    result_div.innerHTML = compGana;
    if (compScore === 10) {
      result_div.innerHTML = finComp;
      userScore = 0;
      compScore = 0;
    } else {
      result_div.innerHTML = compGana;
    }
  }
}

function empate(opcionUser, opcionPc) {
  indic_span.innerHTML = comPartida;
  indic_span.innerHTML = start;
  result_div.innerHTML = empatamos;
}


function game(opcion) {
  const movidaPc = movidaComp();
  function movidaMa() {
    let elemento = document.getElementById("ma");
    if (movidaPc === "r") {
      elemento.src = "https://bit.ly/3gNUTAf";
    }
    else {
      if (movidaPc === "p") {
        elemento.src = "https://bit.ly/3gMPmKh";
      }
      else {
        if (movidaPc === "t") {
          elemento.src = "https://bit.ly/35Dz6q8";
        }
      }
    }
  }
  movidaMa(movidaPc);
  const movidaUser = opcion;

  switch (movidaUser + movidaPc) {
    case "rt":
    case "pr":
    case "tp":
      ganar("movidaUser, movidaPc");

      break;
    case "rp":
    case "pt":
    case "tr":
      pierda("movidaUser, movidaPc");
      break;
    case "rr":
    case "pp":
    case "tt":
      empate("movidaUser");
      break;

    default:
      break;
  }
}

function main() {
  piedra_div.addEventListener("click", () => game("r"));
  papel_div.addEventListener("click", () => game("p"));
  tijera_div.addEventListener("click", () => game("t"));
}
main();


function miFuncionr() {
  let elemento = document.getElementById("us");
  elemento.src = "https://bit.ly/35CnPpV";
}


function miFuncionp() {
  let elemento = document.getElementById("us");
  elemento.src = "https://bit.ly/3cUaVre";
}


function miFunciont() {
  let elemento = document.getElementById("us");
  elemento.src = "https://bit.ly/2SCQybn";
}



