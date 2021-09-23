const input = document.querySelector("#search");
const btn = document.querySelector(".search-button");
const noResults = document.querySelector(".no-results-box");
const searchbox = document.querySelector(".search-box");
const contsugerencia = document.querySelector(".contenedorSugerencia");
const ulInput = document.querySelector(".ulInput");
const btncancel = document.querySelector(".cancel-search");
const apyKey = `p0LSXBgdzta1dWtLOwcuesWDrVUYQZ4A`;


btncancel.addEventListener("click", () => {
    input.value = "";
    btncancel.style.display = "none";
    searchBtn.style.display = "block";
    ulInput.style.display = "none";
    input.focus(); 
});



input.addEventListener("keyup", (e) => {


    if (e.key === 'Enter') {

        ulInput.style.display = "none";
        showGifs();

    } else {

        if (input.value.length !== 0) {
            btncancel.style.display = "block";
            btncancel.style.cursor = "pointer";
            searchBtn.style.display = "none";
            autocomplete();
        } else {
            btncancel.style.display = "none";
            searchBtn.style.display = "block";
            ulInput.style.display = "none";
        }

    }



});

const autocomplete = async () => {



    let url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apyKey}&q=${input.value}&limit=5`;

    const result = await fetch(url);
    const response = await result.json();
    const data = response.data;
    const opciones = [];
    ulInput.innerHTML = "";
    // crear array
    for (let i = 0; i < data.length; i++) {

        opciones.push(data[i].name);
    }
    if (opciones.length == 0) {
        opciones.push(input.value);
    }
    //ulInput.style.display = "none";

    if (opciones.length != 0) {
        ulInput.style.display = "block";
        for (var opcion of opciones) {

            // creo elemento html
            let item = document.createElement("li");
            let iconSearchsug = document.createElement("img");
            let option = document.createElement("p");
            iconSearchsug.src = "./assets/icon-search-modo-noct.svg";
            iconSearchsug.alt = "icono-busqueda";
            option.textContent = opcion;

            //agrego clases 
            item.classList.add("opcionesBuscador");
            iconSearchsug.classList.add("icono-busqueda-sugerencia");
            option.classList.add("popcionBudqueda");


            // append child
            ulInput.appendChild(item);
            item.appendChild(iconSearchsug);
            item.appendChild(option);

            //evento

            item.addEventListener("click", () => {

                input.value = item.textContent;
                ulInput.style.display = "none";
                showGifs();
            });
            item.addEventListener("mouseover", () => {
                if (localStorage.getItem('dark-mode') === 'true') {
                    item.style.backgroundColor = "#484a50";
                    item.style.cursor = "pointer";
                } else {
                    item.style.backgroundColor = "#562ee5c7";
                    item.style.cursor = "pointer";
                }
            })

            item.addEventListener("mouseout", () => {

                if (localStorage.getItem('dark-mode') === 'true') {
                    item.style.backgroundColor = "#37383C";
                } else {
                    item.style.backgroundColor = "#FFFFFF";
                    item.style.color = "#FFFFFF";
                }
            });


        }
    }

}
