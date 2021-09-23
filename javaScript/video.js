
const video = document.getElementById("videoGif");
const btnComenzar = document.querySelector(".boton-start");
console.log(btnComenzar)
btnComenzar.addEventListener("click", ()=>{
    alert("al fin")
})
const tieneSoporteUserMedia = () =>{

    !!(navigator.mediaDevices.getUserMedia)
 
     // Si no soporta...
     // Amable aviso para que el mundo comience a usar navegadores decentes ;)
     if (typeof MediaRecorder === "undefined" || !tieneSoporteUserMedia())
         return alert("Tu navegador web no cumple los requisitos; por favor, actualiza o cambia yu navegador");

}


function getStreamAndRecord () { 
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
       height: { max: 480 }
    }
 }).then (function(stream){
    video.srcObject = stream;
    video.play();
 })
}

btnComenzar.addEventListener("click",()=>{
    tieneSoporteUserMedia();
    getStreamAndRecord();
})

    
    
