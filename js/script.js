const minutosEl = document.querySelector("#minutos");
const segundosEl = document.querySelector("#segundos");
const milisegundosEl = document.querySelector("#milisegundos");
const botaoIniciar = document.querySelector("#botaoIniciar");
const botaoPausar = document.querySelector("#botaoPausar");
const botaoContinuar = document.querySelector("#botaoContinuar");
const botaoResetar = document.querySelector("#botaoResetar");

let intervalo;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = 0; 

botaoIniciar.addEventListener("click",iniciarContador);
botaoPausar.addEventListener("click",pausarContador);
botaoContinuar.addEventListener("click",continuarContador);
botaoResetar.addEventListener("click",resetarContador);

function iniciarContador(){
    intervalo = setInterval(() => {
        if(!isPaused) {
            milisegundos += 10

            if(milisegundos === 1000){
                segundos++;
                milisegundos = 0;
            }

            if(segundos === 60){
                minutos++;
                segundos = 0
            }

            minutosEl.textContent = formatarTempo(minutos);
            segundosEl.textContent = formatarTempo(segundos);
            milisegundosEl.textContent = formatarTempo(milisegundos);

        }
    },10);

    botaoIniciar.style.display = "none";
    botaoPausar.style.display = "block";
}

    function pausarContador () {
        isPaused = true;
        botaoPausar.style.display="none";
        botaoContinuar.style.display="block";
    }

    function continuarContador(){
        isPaused = false;
        botaoPausar.style.display="block";
        botaoContinuar.style.display="none";
    }

    function resetarContador(){
        clearInterval(intervalo);
        isPaused = false;
        minutos = 0;
        segundos = 0;
        milisegundos = 0;

        minutosEl.textContent = "00";
        segundosEl.textContent = "00";
        milisegundosEl.textContent = "000";

        botaoInicio.style.display = "block";
        botaoPausar.style.display = "none";
        botaoContinuar.style.display = "none";
    }
    

    function formatarTempo(tempo){
        return tempo < 10 ? `0${tempo}`:tempo;
    }

    function formatarMilisegundos(tempo){
        return time < 100 ? `${tempo}`.padStart(3,"0") : tempo;
    }
