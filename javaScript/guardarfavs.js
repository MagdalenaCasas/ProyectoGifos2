function guardarFavoritos(gif){
    let img = document.createElement('img')
    img.classList.add('imgFavoritos')
    img.src = gif.images.downsized.url;
    let id = gif.id;
    img.id = id;
    img.alt = gif.title;
    let figura = document.createElement('div')

    // overlay violeta
    let overlay = document.createElement('div');// div violeta
    let card_icons = document.createElement('div'); // iconos del div violeta
    let btnEliminar = document.createElement('button'); // boton favoritos
    let button2 = document.createElement('button');// boton descarga
    let button3 = document.createElement('button');// boton ampliar
    let imgBtn1 = document.createElement('img');//img favoritos
    let imgBtn2 = document.createElement('img'); // img descarga
    let imgBtn3 = document.createElement('img'); //img ampliar
    let gif_caption = document.createElement('div');
    let user = document.createElement('p'); // muestra el user (dato sacado de json)
    let titulo = document.createElement('h5'); // muenstra el tittle del gif

    //agregar las imagenes a los botones
    btnEliminar.appendChild(imgBtn1);
    button2.appendChild(imgBtn2);
    button3.appendChild(imgBtn3);
   // div que tiene los iconos de la tarjeta violeta
    card_icons.appendChild(btnEliminar);
    card_icons.appendChild(button2);
    card_icons.appendChild(button3);
  // div que tiene los datos user y title del gif
    gif_caption.appendChild(user);
    gif_caption.appendChild(titulo);



  // tarjeta violeta con todos los elementos agregados
    overlay.appendChild(card_icons);
    overlay.appendChild(gif_caption);
    overlay.classList.add('overlayFavs')
    titulo.textContent = gif.title;

   // añade clases a la tarjeta violeta
    card_icons.classList.add('card-icons');
    btnEliminar.classList.add('pointer');
    button2.classList.add('pointer');
    button3.classList.add('pointer');


    imgBtn1.src = "./assets/icon-trash-normal.svg"
    imgBtn1.alt = "icono favorito"
    imgBtn1.classList.add('svg-active');
    imgBtn1.classList.add('svg-hover');


    imgBtn2.src = "./assets/icon-download-normal.svg"
    imgBtn2.alt = "icono descarga"
    imgBtn2.classList.add('svg-hover');

    imgBtn3.src = "./assets/icon-max-normal.svg"
    imgBtn3.alt = "icono expandir"
    imgBtn3.classList.add('svg-hover');


    if(gif.user !== undefined){
      user.textContent = gif.user.display_name;
    }else{
      user.textContent = 'Anonymous';
    }

    gif_caption.classList.add('gif-caption');
    user.classList.add('card-user');
    titulo.classList.add('subtitulo-5');

    figura.append(img, overlay)
    figura.classList.add('card-other')
    const duplicate = document.querySelector('#favs')
    duplicate.appendChild(figura)

   //ELIMINAR UN FAVORITO
    btnEliminar.addEventListener("click", ()=>{
  /*     if(arrayF.length == 0){
        favsVacios.style.display = "block"   
      }if(arrayF.length !== 0){
        favsVacios.style.display = "none"} */
        
      //duplicate.removeChild(figura); //SOLO VISUAL
      console.log(id)
      let arrayF2 = [];
      let arrayF3 = new Array();
      // get item es para traer la info guardada en favoritos
      arrayF2 = JSON.parse(window.localStorage.getItem('favoritos'));
    try{
      arrayF2.forEach(elemento =>{
        console.log(elemento.id)
        if(elemento.id !== id){
          arrayF3.push(elemento)
        }else{
          duplicate.removeChild(figura); //SOLO VISUAL
        }
      })
      // hice un set item para pisar el array anterior para que se pueda reemplazar el array con el nuevo sin el elemento borrado
     // window.localStorage.clear();
     localStorage.removeItem('favoritos');
      window.localStorage.setItem("favoritos", JSON.stringify(arrayF3));
      
    }catch(error){
      console.log(error)
    }finally{
      verificarFavs();
    }
  })

  imgBtn2.addEventListener('click', ()=>{
      downloadEvent(gif);
  })

  imgBtn3.addEventListener('click', ()=>{
      expandirImagen(gif);
  })
    
}


