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
    let ancho = window.innerWidth;
    if(altura < scrollTop){
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
    if(ancho < 700){
    navSearchbox.style.display = "none";
    } 
}

window.addEventListener("scroll", mostrarSearchNav);


