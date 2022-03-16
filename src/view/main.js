var main = function() {
    var search = document.querySelector("#search");
    var searchButton = document.querySelector("#searchButton");
    var makananElement = document.querySelector("#makanan");

    var onButtonSearchClicked = function() {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.cariMakan(search.value);
    };

    var renderResult = function(results) {
        makananElement.innerHTML = "";
        results.forEach(function (makanan) {
            var name = makanan.name;
            var sampul = makanan.sampul;
            var deskripsi = makanan.deskripsi;

            var element = document.createElement("div");
            element.setAttribute("class", "makanan");
            
            element.innerHTML = '<img class="sampul" src="' + sampul + '" alt="sampul">\n' +
            '<div class="makanan">\n' +
                '<h2>' + name + '</h2><br>\n' +
                '<p>' + deskripsi + '</p>' +
                '</div>';
            makananElement.appendChild(element);
        })
    };

    var fallbackResult = function(message) {
        makananElement.innerHTML = "";
        makananElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    searchButton.addEventListener("click", onButtonSearchClicked);
}