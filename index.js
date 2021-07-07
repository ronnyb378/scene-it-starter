// * functions
function saveToWatchlist(movieID) {
    // console.log(movieID)
    const movie = movieData.find((function(currentMovie){
        return currentMovie.imdbID == movieID
    }))
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = []
    };
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON)
}

//* start of document and movies
document.addEventListener('DOMContentLoaded', function () {
    // * elements we need to create cards for each movie with eventlistener on the search bar
    const bar = document.querySelector('.search')
    const moviesContainer = document.querySelector('.movies-container')

    // * event listener for the search bar
    bar.addEventListener('submit', (e) => {
        e.preventDefault()
        // const searchBar = document.querySelector('.search-bar')
        // console.log('test')
        // * maps through data.js array and sets variable of currentMovie
        moviesContainer.innerHTML = movieData.map((currentMovie) => {
            e.preventDefault()
            return `<div class="card">
                        <div class="image-fav">
                            <img class="movie-picture" src="${currentMovie.Poster}" alt="...">
                            <button class="watchLater add-button" data-imdbid="${currentMovie.imdbID}">Later?</button>
                        </div>
                        <div class="below-image">
                        <div class="info-box title-date">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <h6 class="card-date">${currentMovie.Year}</h6>
                        </div>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis quia, reiciendis facilis veritatis reprehenderit tempore officia dignissimos placeat fugit sapiente perspiciatis libero? Aut iure assumenda maiores, fugit at laudantium!</p>
                        </div>
                    </div>`
        }).join('')
    });
});
document.addEventListener('click', (e) => {
    if(e.target.classList.contains("add-button")) {
        const movieID = e.target.dataset.imdbid
        saveToWatchlist(movieID)
    }
});