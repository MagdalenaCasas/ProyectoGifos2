
const filaTrending = document.querySelector(".contenedor-gifs");



// MECANISMO CARRUSEL FUNCIONANDO

const flechaIzq = document.getElementById("button-slider-left");
const flechaDerecha = document.getElementById("button-slider-right");
console.log(flechaDerecha)

flechaDerecha.addEventListener("click", ()=>{

    filaTrending.scrollLeft += filaTrending.offsetWidth
   
})

flechaIzq.addEventListener("click", ()=>{
    filaTrending.scrollLeft -= filaTrending.offsetWidth

})





/// FETCH ETC
let arrayF = [];
if(localStorage.getItem("favoritos") !== null){
    arrayF = JSON.parse(window.localStorage.getItem('favoritos'));
}

//arrayF = JSON.parse(window.localStorage.getItem('favoritos'));


const fetchGifsTrending = async () =>{
    const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A&limit=25&rating=g`;
    try {
        //let arrayF =[];
        const response = await fetch(urlTrending);
        const content = await response.json();
        console.log(content.data);
        let gifs = content.data
        gifs.forEach(miGif => {
            cargarGif(miGif, 'trending');
        });
        arrayF.forEach(elemento =>{
            guardarFavoritos(elemento);
        })
    } catch (error) {
        console.error(error);
    }
}
fetchGifsTrending();
 //console.log(arrayF)



