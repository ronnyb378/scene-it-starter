
document.addEventListener('DOMContentLoaded', function () {
    // * elements we need to create cards for each movie with eventlistener on the search bar
    const container = document.querySelector('.container')
    const bar = document.querySelector('.search')
    const moviesContainer = document.querySelector('.movies-container')

    // * event listener for the search bar
    bar.addEventListener('submit', (e) => {
        e.preventDefault()
        const searchBar = document.querySelector('.search-bar')
        // console.log('test')
        // * * this is the value of input at search
        const movie = searchBar.value
        // * maps through data.js array and sets variable of currentMovie
        moviesContainer.innerHTML = movieData.map((currentMovie) => {
            e.preventDefault()
            const movieHtmlArray = currentMovie
            return `<div class="card">
                        <div class="image-fav">
                            <img class="movie-picture" src="${movieHtmlArray.Poster}" alt="...">
                            <button class="watchLater add-button" data-imdbid="${movieHtmlArray.imdbID}">Later?</button>
                        </div>
                        <div class="below-image">
                        <div class="info-box title-date">
                            <h5 class="card-title">${movieHtmlArray.Title}</h5>
                            <h6 class="card-date">${movieHtmlArray.Year}</h6>
                        </div>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis quia, reiciendis facilis veritatis reprehenderit tempore officia dignissimos placeat fugit sapiente perspiciatis libero? Aut iure assumenda maiores, fugit at laudantium!</p>
                        </div>
                    </div>`
        }).join('')
    });
    document.addEventListener('click', (e) => {
        console.log('test')
    })
});


