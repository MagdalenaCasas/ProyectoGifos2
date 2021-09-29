const searchInputNav = document.getElementById("nav-search");
const searchBtnNav = document.querySelector(".nav-search-button");
const navSearchbox = document.querySelector(".nav-search-box");
const header = document.getElementById("header");
const txtTrending = document.querySelector(".ContenedorTotalCarrusel")

searchBtnNav.addEventListener("click", (e)=>{
     ulInput.innerHTML = "";
    tituloResults.innerText = searchInputNav.value;
    btnVerMAs.style.display = "flex"; 
    showGifsNav();
}) 
searchInputNav.addEventListener("keypress",(event)=>{
   if(event.code == "Enter"){
    showGifsNav();
    ulInput.innerHTML = "";
    }
}) 


function mostrarSearchNav(){
    let scrollTop = document.documentElement.scrollTop;
    let altura = txtTrending.offsetTop;
    if(altura < scrollTop){
        console.log("estoy en el if del scroll")
        navSearchbox.style.display = "block";
        header.style.position ="fixed"
        header.style.zIndex=1;
        searchInputNav.style.background ="transparent";
        header.style.marginTop = "-45px"
        
    }else{
        navSearchbox.style.display = "none";
        header.style.position = "";
        header.style.zIndex="";
        header.style.marginTop = ""
    }
}

const ancho = window.matchMedia('screen and (max-width: 700px)')

if (ancho.matches){
    console.log("tamaño celu")
    navSearchbox.style.display = "none";
    header.style.position ="relative"
}else{
    console.log("tamaño compu")
    window.addEventListener("scroll", mostrarSearchNav);
}



