const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 100,
    attacked() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert("Character died");
        }
        document.getElementById("health").textContent = this.health;
    },
    levelUp() {
        if (this.level < 8) {
            this.level += 1;
            document.getElementById("level").textContent = this.level;
        } else {
            alert ("Character is already at max level!");
        }
    }
};
document.getElementById("attacked").addEventListener("click", function() {
    character.attacked();
});
document.getElementById("levelUp").addEventListener("click", function() {
    character.levelUp();
});