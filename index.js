let baseURL = "https://ckx-movies-api.herokuapp.com/"

let addMovieBtn = document.querySelector("#add-movie");
let movieTitle = document.querySelector("#movie-title").value
let moviePlot = document.querySelector("#movie-plot").value

addMovieBtn.addEventListener('click', function () {


})

function searchValues (){
    
    return movieTitle, moviePlot
}

function displaySearch() {
    // display searched movie from existing list 
    let searchMovieBtn = document.querySelector('#search');
    searchMovieBtn.addEventListener('click', function () {
        let movieTitle = document.querySelector("#movie-title").value
        let moviePlot = document.querySelector("#movie-plot").value;
        for (let item of listOfAllMovies) {
            if (item.title == movieTitle) {
                searchedHtml = `
                <p>
                <li>Title: ${item.title}</li>
                <li>Plot: ${item.plot}</li>
                </p>
                `
                document.querySelector("#display-searched-res").innerHTML = searchedHtml;
            }
        }

    });
}

async function displayAllMovies() {
    let response = await axios.get(baseURL + "/movies");
    // console.log(response.data);
    let listOfAllMovies = response.data;
    console.log(listOfAllMovies);
    for (let item of listOfAllMovies) {
        html = `
            <p>    
            <li>Title: ${item.title}</li>
            <li>Plot: ${item.plot}</li>
            </p>
        `
        document.querySelector("#movie-list").innerHTML += html;
    }
}

window.addEventListener('DOMContentLoaded', async function () {
    
    displayAllMovies();
    displaySearch();

})