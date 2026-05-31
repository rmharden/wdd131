const card = [
      {
        imgSrc: "images/snortleblat.jpeg",
        imgAlt: "lizard-lke man standing a swamp",
        name: "Snortleblat",
        class: "Swamp Beast Diplomat",
        level: 5,
        health: 100
      }
    ];
    const characters = document.querySelector('#card');

    cards.forEach(car => {
        const article = document.createElement('article');
        article.className = 'card';
        
        let html = `
            <img src="${card.imgSrc}" alt="${card.imgAlt}">
            <h1>${card.name}</h1>
            <p><strong>Class:</strong> ${card.class}</p>
            <p><strong>Level:</strong> ${card.level}</p>
            <p><strong>Health:</strong> ${card.health}</p>
        `

    article.innerHTML = html;
    movieList.appendChild(article);

    });