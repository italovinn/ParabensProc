const audio1 = new Audio('assets/midia/Xuxa - Parabéns da Xuxa (Álbum Xou da Xuxa) [Áudio Oficial].mp3');
audio1.volume = 1;

const audio2 = new Audio('assets/midia/Lil Peep & XXXTENTACION - Falling Down (Lyrics).mp3');
audio2.volume = 1;

function botaoSim(){
    const header = document.querySelector("header");
    header.style.backgroundColor = "yellow";
    header.style.color = "black";

    const bS = document.getElementById("botaoSim");
    const bN = document.getElementById("botaoNao");
    bS.style.backgroundColor = "yellow";
    bS.style.color = "black";
    bN.style.backgroundColor = "yellow";
    bN.style.color = "black";

    if(!audio2.paused){
        audio2.pause();
        audio2.currentTime = 0;
    }

    if (!audio1.paused && !audio1.ended) {
        audio1.pause();
        audio1.currentTime = 0;
    } else {
        audio1.play();
    }

    const gif = new Image();
    gif.src = "assets/midia/oloko.gif";

    const gifGAP = document.getElementById("gifGAP");
    const gifOutro = new Image();
    gifOutro.src = "badvibes.gif";
    if(gifGAP.firstChild && gifGAP.firstChild.src.includes(gifOutro)){
        gifGAP.removeChild(gifGAP.firstChild);
    }else{
        gifGAP.innerHTML = "";
        gifGAP.appendChild(gif);
    }
}

function botaoNao(){
    const header = document.querySelector("header");
    header.style.backgroundColor = "blue";
    header.style.color = "white";

    const bS = document.getElementById("botaoSim");
    const bN = document.getElementById("botaoNao");
    bS.style.backgroundColor = "blue";
    bS.style.color = "white";
    bN.style.backgroundColor = "blue";
    bN.style.color = "white";

    if(!audio1.paused){
        audio1.pause();
        audio1.currentTime = 0;
    }
    
    if (!audio2.paused && !audio2.ended) {
        audio2.pause();
        audio2.currentTime = 0;
    } else {
        audio2.play();
    }

    const gif = new Image();
    gif.src = "assets/midia/badvibes.gif";
    gif.width = 350;

    const gifGAP = document.getElementById("gifGAP");
    const gifOutro = new Image();
    gifOutro.src = "oloko.gif";

    if(gifGAP.firstChild && gifGAP.firstChild.src.includes(gifOutro)){
        gifGAP.removeChild(gifGAP.firstChild);
    }else{
        gifGAP.innerHTML = "";
        gifGAP.appendChild(gif);
    }


}