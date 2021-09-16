
fetch('movie.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

function appendData(data) {
    let mainContainer = document.getElementById("myData");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = data[i].id + '.' + data[i].title + ' ' + 'Rating: ' + data[i].rating;
        mainContainer.appendChild(div);
    }
}
