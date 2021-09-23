let favsVacios = document.querySelector(".favs-vacios-box")
let misGifosVacio = document.querySelector(".misGifos-vacios-box")
console.log(favsVacios)


function verificarFavs(){

    
    if(localStorage.getItem("favoritos").length == 2){
        favsVacios.style.display = "block";
    }else{
        favsVacios.style.display = "none";
    } 
 

}


verificarFavs();