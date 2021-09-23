// array favoritos



const cargarGif = (gif, tipo) => {

    // div que contiene el gif
    let fig = document.createElement('div'); // div que contiene la img del gif
    let img = document.createElement('img');
    // tarjeta violeta
    let overlay = document.createElement('div');// div violeta
    let card_icons = document.createElement('div'); // iconos del div violeta
    let button1 = document.createElement('button'); // boton favoritos
    let button2 = document.createElement('button');// boton descarga
    let button3 = document.createElement('button');// boton ampliar
    let btnEliminar = document.createElement('button'); // boton eliminar
    let imgBtn1 = document.createElement('img');//img favoritos
    let imgBtn2 = document.createElement('img'); // img descarga
    let imgBtn3 = document.createElement('img'); //img ampliar
    let imgBtnEliminar = document.createElement('img');//img eliminR
    let gif_caption = document.createElement('div');
    let user = document.createElement('p'); // muestra el user (dato sacado de json)
    let titulo = document.createElement('h5'); // muenstra el tittle del gif

    //agregar las imagenes a los botones

    button1.appendChild(imgBtn1);
    button2.appendChild(imgBtn2);
    button3.appendChild(imgBtn3);
    btnEliminar.appendChild(imgBtnEliminar);
    // div que tiene los iconos de la tarjeta violeta
    card_icons.appendChild(button1);
    card_icons.appendChild(button2);
    card_icons.appendChild(button3);

    if (tipo == 'gifPropios') {
        card_icons.appendChild(btnEliminar);
    }

    // div que tiene los datos user y title del gif
    gif_caption.appendChild(user);
    gif_caption.appendChild(titulo);
    // tarjeta violeta con todos los elementos agregados
    overlay.appendChild(card_icons);
    overlay.appendChild(gif_caption);

    // añade clases a la tarjeta violeta
    card_icons.classList.add('card-icons');
    button1.classList.add('pointer');
    button2.classList.add('pointer');
    button3.classList.add('pointer');
    btnEliminar.classList.add('pointer');

    imgBtn1.src = "./assets/icon-fav-normal.svg"
    imgBtn1.alt = "icono favorito"
    imgBtn1.classList.add('svg-active');
    imgBtn1.classList.add('svg-hover');


    imgBtn2.src = "./assets/icon-download-normal.svg"
    imgBtn2.alt = "icono descarga"
    imgBtn2.classList.add('svg-hover');

    imgBtn3.src = "./assets/icon-max-normal.svg"
    imgBtn3.alt = "icono expandir"
    imgBtn3.classList.add('svg-hover');

    imgBtnEliminar.src = "./assets/icon-trash-normal.svg"
    imgBtnEliminar.alt = "icono eliminar"
    //imgBtnEliminar.classList.add('svg-active');
    imgBtnEliminar.classList.add('svg-hover');

    gif_caption.classList.add('gif-caption');
    user.classList.add('card-user');
    titulo.classList.add('subtitulo-5');


    if (gif.user !== undefined) {
        user.textContent = gif.user.display_name;
    } else {
        user.textContent = 'Anonymous';
    }
    titulo.textContent = gif.title;

    let out;
    if (tipo == 'trending') {
        out = document.querySelector('.contenedor-gifs');
        imgBtn1.classList.add('icon');
        imgBtn2.classList.add('icon');
        imgBtn3.classList.add('icon');
        overlay.classList.add('overlay')
        fig.classList.add('card');
        img.classList.add("imgGifTrending");
        out.insertAdjacentElement('afterbegin', fig);
    } else if (tipo == 'resultsSearch') {
        out = document.querySelector('#resultsSearch');
        overlay.classList.add('overlaySearch');
        imgBtn1.classList.add('iconCardSearch');
        imgBtn2.classList.add('iconCardSearch');
        imgBtn3.classList.add('iconCardSearch');
        img.classList.add("imgGifSearch");
        fig.classList.add('cardSearch');
        out.insertAdjacentElement('beforeend', fig);

    } else if (tipo == 'gifPropios') {
        out = document.querySelector('#misGifos');
        overlay.classList.add('overlaySearch');
        imgBtn1.classList.add('iconCardSearch');
        imgBtn2.classList.add('iconCardSearch');
        imgBtn3.classList.add('iconCardSearch');
        imgBtnEliminar.classList.add('iconCardSearch');
        img.classList.add("imgGifSearch");
        fig.classList.add('cardSearch');
        out.insertAdjacentElement('beforeend', fig);



    }


    // agrego los datos del fetch y genero las cards para cada gif

    img.src = gif.images.downsized.url;
    img.alt = gif.title;
    fig.appendChild(img);
    fig.appendChild(overlay);


    // imgBtn1.addEventListener('mouseover', changeIconsHover);
    imgBtn1.addEventListener('click', changeIconsActive);
/*     imgBtn1.addEventListener('mouseout', changeIconsHover);
    imgBtn2.addEventListener('mouseover', changeIconsHover);
    imgBtn2.addEventListener('mouseout', changeIconsHover);
    imgBtn3.addEventListener('mouseover', changeIconsHover);
    imgBtn3.addEventListener('mouseout', changeIconsHover);
    btnEliminar.addEventListener('mouseover', changeIconsHover);
    btnEliminar.addEventListener('mouseout', changeIconsHover); */

    button1.addEventListener("click", () => {

        let arrayFav = [];

        if (window.localStorage.getItem('favoritos') !== null) {
            arrayFav = JSON.parse(window.localStorage.getItem('favoritos'));
        }
        //console.log(gif.id);

        let estaRepetido = false;
        for (let _gif of arrayFav) {

            if (_gif.id === gif.id) {
                estaRepetido = true;
                //arrayFav.push(gif);
                //console.log("se guardo");
            }
        }
        if (!estaRepetido) {
            arrayFav.push(gif);
            console.log("se guardo");
            // se sube a favoritos con json stringify para que se gusrade con los datos. Si es set item es para subirlo
            window.localStorage.setItem("favoritos", JSON.stringify(arrayFav));
            //guardarFavoritos(gif);
            comprobarFavoritos(gif);

        }




    })

    function comprobarFavoritos(gif) {
        guardarFavoritos(gif);
        verificarFavs();
    }

    imgBtn2.addEventListener('click', () => {
        downloadEvent(gif);
    })

    imgBtn3.addEventListener('click', () => {
        expandirImagen(gif);
    })

    //ELIMINAR UN FAVORITO
    btnEliminar.addEventListener("click", () => {
        
        let arrayF2 = [];
        let arrayF3 = new Array();
        arrayF2 = JSON.parse(window.localStorage.getItem('misGifos'));
        try {
            arrayF2.forEach(elemento => {
                //console.log(elemento.id)
                if (elemento !== gif.id) {
                    arrayF3.push(elemento)
                } else {
                    out.removeChild(fig); //SOLO VISUAL
                }
            });
            localStorage.removeItem('misGifos');
            window.localStorage.setItem("misGifos", JSON.stringify(arrayF3));

        } catch (error) {
            console.log("Error al eliminar mi gif" + error);
        }finally{
            verificarMisGifs();
        }

        /*         let arrayF2 = [];
                let arrayF3 = new Array();
                // get item es para traer la info guardada en favoritos
                arrayF2 = JSON.parse(window.localStorage.getItem('misGifos'));
              try{
                arrayF2.forEach(elemento =>{
                  //console.log(elemento.id)
                  if(elemento.id !== gif.id){
                    arrayF3.push(elemento)
                  }else{
                    duplicate.removeChild(figura); //SOLO VISUAL
                  }
                })
                // hice un set item para pisar el array anterior para que se pueda reemplazar el array con el nuevo sin el elemento borrado
               // window.localStorage.clear();
               localStorage.removeItem('misGifos');
                window.localStorage.setItem("misGifos", JSON.stringify(arrayF3));
                
              }catch(error){
                console.log(error)
              }finally{
                //verificarFavs();
              } */
    });

}







// ---------------------------------- POP UP Y DOWNLOAD-------------------------------------




















function downloadEvent(gif) {
    (async () => {
        let a = document.createElement('a');
        let response = await fetch(`${gif.images.original_mp4.mp4}`);
        let file = await response.blob();
        a.download = 'myGif';
        a.href = window.URL.createObjectURL(file);
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        a.click();
    })();
}


function expandirImagen(gif) {
    let popup = document.createElement('div');
    popup.classList.add('popup');
    let body = document.querySelector('body');
    let imagen = document.createElement('img');
    let botonCerrar = document.createElement('button');
    botonCerrar.classList.add('icon');
    botonCerrar.classList.add('svg-hover');
    botonCerrar.classList.add('boton-cerrar-apliacion');
    let imagenCerrar = document.createElement('img');
    imagenCerrar.src = "./assets/close.svg"
    imagenCerrar.classList.add('iconClose')
    botonCerrar.appendChild(imagenCerrar);
    botonCerrar.addEventListener('click', closePopup);
    popup.appendChild(botonCerrar);
    imagen.src = gif.images.original.url
    imagen.classList.add('gifAmpliado')

    let botonesBox = document.createElement('div');
    // boton favs
    let buttonFav = document.createElement('button');
    let imgBtnFav = document.createElement('img');
    buttonFav.appendChild(imgBtnFav);
    imgBtnFav.src = "./assets/icon-fav-normal.svg";
    imgBtnFav.alt = "icono favoritos"
    buttonFav.classList.add("button-popup")

    //boton download
    let buttondownload = document.createElement('button');
    let imgBtndownload = document.createElement('img');
    buttondownload.appendChild(imgBtndownload);
    imgBtndownload.src = "./assets/icon-download-normal.svg";
    imgBtndownload.alt = "icono descarga"
    buttondownload.classList.add("button-popup")

    botonesBox.append(buttonFav, buttondownload);
    botonesBox.classList.add("botonesBox")

    // datos de usuario y titulo
    let user = document.createElement('p'); // muestra el user (dato sacado de json)
    let titulo = document.createElement('h5');
    titulo.classList.add("h5-popup");
    user.classList.add("p-popup") // muenstra el tittle del gif
    user.style.color = "black";
    titulo.style.color = "black";
    if (gif.user !== undefined) {
        user.textContent = gif.user.display_name;
    } else {
        user.textContent = 'Anonymous';
    }
    titulo.textContent = gif.title;
    let datos = document.createElement('div')
    datos.classList.add("datospopup")
    datos.append(user, titulo)

    let datosGral = document.createElement('div')
    datosGral.append(datos, botonesBox)
    datosGral.classList.add("datosGralPopup")

    popup.append(imagen, datosGral);
    body.appendChild(popup);


    // AGREGO FUNCION A LOS BOTONES

    function comprobarFavoritos(gif) {
        guardarFavoritos(gif);
        verificarFavs();
    }
    buttondownload.addEventListener("click", () => {
        downloadEvent(gif)
    })

    buttonFav.addEventListener("click", () => {
        imgBtnFav.src = "./assets/icon-fav-active.svg";
        let arrayFav = [];

        if (window.localStorage.getItem('favoritos') !== null) {
            arrayFav = JSON.parse(window.localStorage.getItem('favoritos'));
        }
        //console.log(gif.id);

        let estaRepetido = false;
        for (let _gif of arrayFav) {

            if (_gif.id === gif.id) {
                estaRepetido = true;
                //arrayFav.push(gif);
                //console.log("se guardo");
            }
        }
        if (!estaRepetido) {
            arrayFav.push(gif);
            console.log("se guardo");
            // se sube a favoritos con json stringify para que se gusrade con los datos. Si es set item es para subirlo
            window.localStorage.setItem("favoritos", JSON.stringify(arrayFav));
            //guardarFavoritos(gif);
            comprobarFavoritos(gif);

        }


    })


}


const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.
        removeChild(popup);
}


