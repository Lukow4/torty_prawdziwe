document.getElementById("button1").addEventListener("click", loadTxt);
function loadTxt() {
    fetch("data.txt").then(function(response) {
        return response.text();
    }).then(function(data) {
        console.log(data);
        document.getElementById("results").innerHTML = data;
    });
}

//# sourceMappingURL=stock.7c0ccee6.js.map
