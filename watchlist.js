document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.querySelector('.movies-container')
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    console.log(watchlist);
    moviesContainer.innerHTML = watchlist.map((currentMovie) => {
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
    })