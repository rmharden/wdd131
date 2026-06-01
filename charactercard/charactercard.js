const aCharacter = {
    image: 'images/snortleblat.jpeg',
    alt: 'a lizard-like man standing in a foggy swamp',
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat', 
    level: 5,
    health: 100,

    levelUp: function () {
        this.level = this.level + 1 
    },

    attack: function () {
        this.health = this.health - 20
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }
};
document.querySelector('.name').textContent = aCharacter.name;
document.querySelector('.image').setAttribute('src', aCharacter.image);
document.querySelector('.image').setAttribute('alt', aCharacter.alt);


function characterTemplate(character) {
    return `
      <p>Class: ${character.class}</p>
      <p>Level: ${character.level}</p>
      <p>Health: ${character.health}</p>`
}

function renderCharacter(character) {
    document.querySelector(".stats").innerHTML = characterTemplate(character);
}

renderCharacter(aCharacter);

document.querySelector(".attack").addEventListener("click", function () {
    aCharacter.attack();
    renderCharacter(aCharacter);
});
document.querySelector(".levelUp").addEventListener("click", function () {
    aCharacter.levelUp();
    renderCharacter(aCharacter);
});