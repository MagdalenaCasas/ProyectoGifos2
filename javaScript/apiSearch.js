const searchInput = document.getElementById("search");
const resultsSearch = document.getElementById("resultsSearch");
const btnVerMAs = document.getElementById("btnVerMas");
const linkVerMas = document.querySelector(".link-boton")
const fav = document.getElementById("favs");
const iconSearch = document.getElementById("search-button")
const tituloResults = document.getElementById("h2-titulo-results");
const searchBtn = document.querySelector(".search-button");
const separador = document.querySelector(".separador");
let paginador = 1;
let busquedaNav =false; 
let busqueda =false; 
searchBtn.addEventListener("click", showGifs);
let trendingSearches = document.querySelector('.trending-tags');

async function showGifsNav() {

    tituloResults.innerText = searchInputNav.value;
    resultsSearch.innerHTML = "";
    busquedaNav =true;
    busqueda =false; 
    await searchN();
    //btnVerMAs.style.display = "flex";

}



async function showGifs(titulo) {

    tituloResults.innerText = searchInput.value;
    resultsSearch.innerHTML = "";
    busquedaNav =false;
    busqueda =true; 
    await search();
    //btnVerMAs.style.display = "flex";

}


btnVerMAs.addEventListener("mouseover", (e) => {

    btnVerMAs.style.background = "#572EE5";
    linkVerMas.style.color = "white";


})

btnVerMAs.addEventListener("mouseout", (e) => {

    btnVerMAs.style.background = "white";
    linkVerMas.style.color = "#572EE5";

})

btnVerMAs.addEventListener("click", async (e) => {
    paginador++;
   
    if(busqueda){
         await search();
     }

     if(busquedaNav){
         await searchN();
     }

    if (paginador > 4) {
        btnVerMAs.style.display = 'none';
    }

    //btnVerMAs.style.display = "flex";

})


const search = async () => {
    const apikey = "p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A";
    const urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${searchInput.value}&limit=12&offset=${12 * paginador}&rating=g&lang=en`
    try {
        const response = await fetch(urlSearch);
        const content = await response.json();
        //console.log(content.data);
        let gifs = content.data;

        if (gifs.length > 0) {
            noResults.style.display = "none";
            separador.style.display = "none";
            btnVerMAs.style.display = "block";
            gifs.forEach(miGif => {
                cargarGif(miGif, 'resultsSearch');
            });
            btnVerMAs.style.display = "flex";
        } else {

            noResults.style.display = "block";
            separador.style.display = "block";
            btnVerMAs.style.display = "none";
        }

    } catch (error) {
        console.error(error);
    }
}


const searchN = async () => {
    const apikey = "p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A";
    const urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${searchInputNav.value}&limit=12&offset=${12 * paginador}&rating=g&lang=en`
    try {
        const response = await fetch(urlSearch);
        const content = await response.json();
        //console.log(content.data);
        let gifs = content.data;

        if (gifs.length > 0) {
            noResults.style.display = "none";
            separador.style.display = "none";
            btnVerMAs.style.display = "block";
            gifs.forEach(miGif => {
                cargarGif(miGif, 'resultsSearch');
            });
            btnVerMAs.style.display = "flex";
        } else {

            noResults.style.display = "block";
            separador.style.display = "block";
            btnVerMAs.style.display = "none";
        }

    } catch (error) {
        console.error(error);
    }
}


 const trendingTags= async () => {
    const apikey = "p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A";
    const urlTrendingTags = 'https://api.giphy.com/v1/trending/searches?api_key=p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A&limit=25&rating=g'
    try {
        const response = await fetch(urlTrendingTags);
        const content = await response.json();
        //console.log(content.data);
        let trendingTags = content.data;
        let trendings = trendingTags.slice(0, 5);
        console.log(trendings.join())
        for(let i=0; i<5;i++){
            let searchLink = document.createElement('a');
            searchLink.textContent = trendings[i];
            searchLink.href = '#';
            searchLink.classList.add('search-link');
            trendingSearches.appendChild(searchLink);

            if(i<4){
                let separator = document.createElement('p');
                separator.textContent = ', ';
                separator.classList.add('search-separator');
                trendingSearches.appendChild(separator);
            }
    
            searchLink.addEventListener('click', ()=>{
                busqueda = searchLink.textContent
                tituloResults.innerText = busqueda;
                fetchLink()
                
            })
        }
        
    } catch (error) {
        console.error(error);
    }
}
trendingTags()


const fetchLink = async () => {
    const apikey = "p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A";
    const urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${busqueda}&limit=12&offset=${12 * paginador}&rating=g&lang=en`
    try {
        const response = await fetch(urlSearch);
        const content = await response.json();
        //console.log(content.data);
        let gifs = content.data;

        if (gifs.length > 0) {
            noResults.style.display = "none";
            separador.style.display = "none";
            btnVerMAs.style.display = "block";
            gifs.forEach(miGif => {
                cargarGif(miGif, 'resultsSearch');
            });
            btnVerMAs.style.display = "flex";
        } else {

            noResults.style.display = "block";
            separador.style.display = "block";
            btnVerMAs.style.display = "none";
        }

    } catch (error) {
        console.error(error);
    }
}