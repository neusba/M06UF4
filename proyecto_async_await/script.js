const keys = {
    api_key: '39321cf0cdce7ed228d76c8199eaf958',
    session_id: 'cbe288d5b00aaaefdeeb6a42c8b9d865aad5ea63',
    account_id: '21215433',
    auth_token: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMyMWNmMGNkY2U3ZWQyMjhkNzZjODE5OWVhZjk1OCIsInN1YiI6IjY2MWQ1ODE1MWU2NDg5MDE2MmQ0ODdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDw4Qsztjo_4DdJWXXLQaszwJ2HGU04cLjnvZo3B0k4'
}

let moviesResult = document.getElementById("moviesResult");

var total_pages = 0;
var current_page = 1;
var lastQuery = "";

async function setFav(id, favBool){
    moviesResult.innerHTML="";

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMyMWNmMGNkY2U3ZWQyMjhkNzZjODE5OWVhZjk1OCIsInN1YiI6IjY2MWQ1ODE1MWU2NDg5MDE2MmQ0ODdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDw4Qsztjo_4DdJWXXLQaszwJ2HGU04cLjnvZo3B0k4'
        },
        body: JSON.stringify({media_type: 'movie', media_id: id, favorite: favBool})
    };
    let url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite`;
    let response = await fetch(url, options);
    let data = await response.json();

    console.log(`${id} marked as ${favBool}`)

    showFavs();
}

async function showFavs(){
    moviesResult.innerHTML="";

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: keys.auth_token
        }
    };
    let url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies`;
    let response = await fetch(url, options);
    let data = await response.json();

    let movies = data.results;
    movies.forEach(movie => printMovie(movie, true, false));
}

async function searchMovies(query, clear){
    if (clear) {
        moviesResult.innerHTML="";
        current_page = 1;
    }
    clearInput();
    removeActive();
    lastQuery = query;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: keys.auth_token
        }
    };
    document.getElementById("loading").hidden = false;
    let url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${current_page}`;
    let response = await fetch(url, options);
    let data = await response.json();

    console.log(data)
    total_pages = data.total_pages;

    let movies = data.results;
    document.getElementById("loading").hidden = true;
    movies.forEach(async movie => {
        let url = `https://api.themoviedb.org/3/movie/${movie.id}/account_states`;
        let response = await fetch(url, options);
        let data = await response.json();

        if (data.favorite) printMovie(movie, true, false)
        else printMovie(movie, false, false)
        
    });
}


// Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

})

// Funciones para detectar la búsqueda de una película 
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value, true);
    }
});

// Click lupa buscadora
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value, true));

// Despeja input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina atributo active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

// Muestra las películas
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

// Función para crear un scroll infinito
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1 && current_page<total_pages) {
        current_page++;
        searchMovies(lastQuery, false)
    }
});