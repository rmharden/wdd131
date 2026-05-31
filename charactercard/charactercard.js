const characters = [
      {
        imgSrc: "images/snortleblat.jpeg",
        imgAlt: "lizard-lke man standing a swamp",
        name: "Snortleblat",
        class: "Swamp Beast Diplomat",
        level: 5,
        health: 100
      }
    ];
    const movieList = document.querySelector('#movie-list');

    movies.forEach(movie => {
        const article = document.createElement('article');
        article.className = 'movie';
        
        let html = `
            <h2>${movie.title}</h2>
            <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
            <p><strong>Release Date:</strong> ${movie.date}</p>
            <p><strong>Recommended Age:</strong> ${movie.ages}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> <span aria-label="${movie.stars.length} out of 5 stars" role="img">${movie.stars}</span></p>
            <p id='desc'>${movie.description}</p>
        `

    article.innerHTML = html;
    movieList.appendChild(article);

    });