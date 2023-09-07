const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?language=es-ES&page=1sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const generos = [
    {
      "id": 28,
      "name": "Accion"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animación"
    },
    {
      "id": 35,
      "name": "Comedia"
    },
    {
      "id": 80,
      "name": "Crimen"
    },
    {
      "id": 99,
      "name": "Documental"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familiar"
    },
    {
      "id": 14,
      "name": "Fantacia"
    },
    {
      "id": 36,
      "name": "Historia"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Musicales"
    },
    {
      "id": 9648,
      "name": "Misterio"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ciencia ficción"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Suspenso"
    },
    {
      "id": 10752,
      "name": "Guerra"
    },

  ]

const main = document.getElementById('main');
const tagsEl = document.getElementById('tags');



var selectedGenero = []
setGenero(); 
function setGenero() {
    tagsEl.innerHTML= '';
    generos.forEach(genero => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id=genero.id;
        t.innerText = genero.name;
        t.addEventListener('click', () => { /*creo el evento */
            if(selectedGenero.length == 0){
                selectedGenero.push(genero.id);
            }else{
                if(selectedGenero.includes(genero.id)){
                    selectedGenero.forEach((id, idx) => {
                        if(id == genero.id){
                            selectedGenero.splice(idx, 1); /*splice:junta */
                        }
                    })
                }else{
                    selectedGenero.push(genero.id);
                }
            }
    
            getMovies(API_URL + '&with_genres='+encodeURI(selectedGenero.join(',')))
            destacarSelection()
        })
        tagsEl.append(t);
    })
}

function destacarSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('destacar')
    })
    clearBtn() /*llama a la funcion*/
    if(selectedGenero.length !=0){   
        selectedGenero.forEach(id => {
            const destacarloTag = document.getElementById(id);
            destacarloTag.classList.add('destacar');
        })
    }

}

function clearBtn(){
    let clearBtn = document.getElementById('clear');
    if(clearBtn){
        clearBtn.classList.add('destacar')
    }else{
            
        let clear = document.createElement('div');
        clear.classList.add('tag','destacar');
        clear.id = 'clear';
        clear.innerText = 'Borrar x';
        clear.addEventListener('click', () => {
            selectedGenero = [];
            setGenero();            
            getMovies(API_URL);
        })
        tagsEl.append(clear);
    }
    
}

getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
   
    fetch(url).then(res => res.json())
             .then(data => {
           console.log(data.results)
        if(data.results.length !== 0){
            showMovies(data.results);
        }
        else{
          main.innerHTML = `<h1>No se encontraron resultados</h1>`
        }
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
          
                <span class="voto">${vote_average}</span>
            </div>
            <div class="descripción">
                <h3>Descripción</h3>
                ${overview}
                <br/> 
                <button class="ver" id="${id}">Mirala aqui</button
            </div>
        
        `
        main.appendChild(movieEl);

    })
}


