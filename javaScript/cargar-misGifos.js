let misGifosVacio = document.querySelector(".misGifos-vacios-box")
let APIKEY = 'p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A';
window.onload = load;

function verificarMisGifs(){

    
    if(localStorage.getItem("misGifos").length == 2){
        misGifosVacio.style.display = "block";
    }else{
        misGifosVacio.style.display = "none";
    } 
 

}

function load() {
        

    let arrayGifs = JSON.parse(localStorage.getItem('misGifos'));
    //console.log(arrayGifs);
    arrayGifs.forEach(idDeMiGif => {
        let urlMisGifs = `https://api.giphy.com/v1/gifs/${idDeMiGif}?api_key=${APIKEY}`;
        fetch(urlMisGifs).then(response => response.json())
            .then(content => {

                let gif = content.data;
                cargarGif(gif, 'gifPropios');

            })
    });
}


verificarMisGifs();



/* let clicksMisGifos = 0;
const MAXCANTGIFOS = 12;
const verMasGifos = document.querySelector('.vermas');
let arrMisGifos2 = new Array();

if(localStorage.getItem('misGifos') !== null){
    arrMisGifos2 = JSON.parse(localStorage.getItem('misGifos'));
}

const sinGifos = document.querySelector('.empty-gifos');

if (localStorage.getItem('misGifos') === null || arrMisGifos2.length == 0){
    sinGifos.style.display = 'block'; 
    verMasGifos.style.display = 'none';
}else{
    sinGifos.style.display = 'none';
    verMasGifos.classList.add('show');
}

const cargarGifos = async () =>{
    let j = clicksMisGifos*MAXCANTGIFOS
    let urlMisGifs;
    let promises = [];
    if(j<arrMisGifos2.length && arrMisGifos2.length > 0){
        while(j < clicksMisGifos*MAXCANTGIFOS + MAXCANTGIFOS && j<arrMisGifos2.length){
            urlMisGifs = `https://api.giphy.com/v1/gifs/${arrMisGifos2[j]}?api_key=${APIKEY}`
            promises.push(fetch(urlMisGifs).then(response => response.json()));
            j++;
        }
    }
    clicksMisGifos++;
    if(j>=arrMisGifos2.length){
        verMasGifos.style.opacity = 0;
    }

    if(arrMisGifos2.length > 0){
        Promise.all(promises).then(resultsArr => {
            resultsArr.forEach(content => {
                let gif = content.data;
                cargarGif(gif, 'misGifos');
            });
        })
    }
}
cargarGifos();
verMasGifos.addEventListener('click', cargarGifos);
 */