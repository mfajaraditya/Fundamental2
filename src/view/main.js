import DataSource from '../data/data-source.js';

const main = () => {
    const search = document.querySelector("#search");
    const searchButton = document.querySelector("#searchButton");
    const makananElement = document.querySelector("#makanan");

    const onButtonSearchClicked =  () =>  {
        DataSource.cariMakan(search.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = results => {
        makananElement.innerHTML = "";
        results.forEach(makanan => {
           const {name, sampul, deskripsi} = makanan;

           const element = document.createElement("div");
            element.setAttribute("class", "makanan");
            
            element.innerHTML = `
            <img class="sampul" src="${sampul}" alt="sampul">
            <div class="makanan">
                <h2>${name}</h2>
                <p>${deskripsi}</p>
                </div>`;
            makananElement.appendChild(element);
        })
    };

    const fallbackResult = message => {
        makananElement.innerHTML = "";
        makananElement.innerHTML += '<h2 class="placeholder">${message}</h2>'
    };

    searchButton.addEventListener("click", onButtonSearchClicked);
}

export default main;