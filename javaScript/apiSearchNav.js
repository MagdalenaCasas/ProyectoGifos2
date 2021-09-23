const searchInputNav = document.getElementById("nav-search");
const searchBtnNav = document.querySelector(".nav-search-button")

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


/* btnVerMAs.addEventListener("click",(e)=>{
    //search2Nav()
    //btnVerMAs.style.display = "none"

}) */


