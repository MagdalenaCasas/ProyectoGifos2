// -----------MENU HAMBURGUESA-------

function cambiarClase(){
  let siteNav= document.getElementById("site-nav")
  siteNav.classList.toggle("site-nav-open")
  let menuOpen= document.getElementById("menu-toggle")
  menuOpen.classList.toggle("menu-open")
}


//         -----MODO NOCTURNO-----



const btnmodoNocturno = document.querySelector("#modoNocturno");

btnmodoNocturno.addEventListener("click", () =>{
  document.body.classList.toggle("dark");
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true');
    cambiarImagenes();
    cambiarTexto();
} else {
    localStorage.setItem('dark-mode', 'false');}
    cambiarImagenes()
    cambiarTexto();
});


const modonoc = document.querySelectorAll(".modonoc")
console.log(modonoc)
let body = document.getElementById("body")

//obtengo el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark');
  btnmodoNocturno.textContent = "MODO DIURNO";
  modonoc.forEach( (icon) => { 
    const idIcon = icon.id
    icon.src = `./assets/${idIcon}-modo-noc.svg`
  })

} else {
  document.body.classList.remove('dark');
  btnmodoNocturno.textContent = "MODO NOCTURNO"
  modonoc.forEach( (icon) => { 
    const idIcon = icon.id
    icon.src = `./assets/${idIcon}.svg`
  })
}



function cambiarImagenes(){ 
  modonoc.forEach( (icon) => { 
    const idIcon = icon.id
    if(body.className.includes("dark")){
      icon.src = `./assets/${idIcon}-modo-noc.svg`
    }else{
      icon.src = `./assets/${idIcon}.svg`
    }

  })

}

console.log(btnmodoNocturno)
function cambiarTexto(){
  if(body.className.includes("dark")){
    btnmodoNocturno.textContent = "MODO DIURNO"
  }else{
    btnmodoNocturno.textContent = "MODO NOCTURNO"
  }
}


// ----------------------MODO HOVER----------------







/* 
const hover = document.querySelectorAll(".hover")
console.log(hover)





function hover(){ 
  hover.forEach( (icon) => { 
    const idIcon = icon.id
    if(body.className.includes("dark")){
      icon.src = `./assets/${idIcon}-hover.svg`
    }else{
      icon.src = `./assets/${idIcon}.svg`
    }

  })

}
*/