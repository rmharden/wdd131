/*My search would result in refreshing the page and not showing the exercises. I found the event.preventDefault() on w3schools and that stopped the page refresh after the search. Below are sites where I got help to do the submit button for the form instead of how it's done in the Hikes assignment. I used both our school lessons and the W3Shools lessons.*/
/*https://www.w3schools.com/jsref/event_preventDefault.asp*/
/*https://www.w3schools.com/jsref/event_onsubmit.asp*/
/*https://www.w3schools.com/js/js_htmldom_eventlistener.asp*/
/*The link below teaches how to do Nested Arrays and Objects. I used this for the exercise generator object arrays*/
/*https://www.w3schools.com/js/js_arrays.asp*/

const exercises = [
	{
		tags: ['stretch', 'abdominal', 'standing'],
		description: 'Stand and extend the arms upward and over the head. Interlace your fingers with your plams up and stretch your arms up and slightly back',
		image: './images/pexels-liliana-drew-8497911.jpg',
		name: 'abdominal'
	},
	{
		tags: ['stretch', 'chest', 'standing'],
		description:
			'Stand and interlace your fingers behind your back. Lift your arms behind your back so they move outward and away from. your body, then lean forward from the waist. Bend your knees, lower your arms and return to the upright position',
		image: './images/pexels-ketut-subiyanto-4909537.jpg',
		name: 'Chest',
	},
	{
		tags: ['stretch', 'back', 'standing'],
		description:
			'Stand with your arms extended to the front at shoulder height with your fingers interlaced, and your palms facing outward. Extend your arms and shoulders forward.',
		image: './images/pexels-kampus-6111619.jpg',
		name: 'Upper Back'
	},
	{
		tags: ['stretch', 'rear deltoid', 'deltoid', 'neck', 'shoulder', 'standing'],
		description:
			'Stand with your feet shoulder width apart and your arms behind your body. With your right hand, grasp your left wrist behind your body and pull down and to the right. Tilt your head to the right. Return to the starting position and repeat with opposite arm.',
		image: './images/pexels-alesiakozik-8154202.jpg',
		name: 'Rear Deltoid (Neck and Shoulder)'
	},
	{
		tags: ['stretch', 'overhead arm pull', 'triceps', 'standing'],
		description:
			'Stand with your feet shoulder width apart. Raise your left arm, bend your left elbow and place your left palm in the center of your back at the base of the neck. Gently pull your elbow with your right hand. Return to the starting position and repeat the procedures with the opposite arm.',
		image: './images/pexels-gokul-gurang-224181659-16618689.jpg',
		name: 'Overhead Arm Pull-Triceps'
	},
	{
		tags: ['stretch', 'cat', 'cow'],
		description: 'Get on your hands and knees. Slowly arch your back upward. Bring your back down to the starting position.',
		image: './images/pexels-kseniachernaya-7302890.jpg',
		name: 'Cat Stretch'
	},
	{
		tags: ['stretch', 'hamstring', 'seated'],
		description:
			"Sit on the ground with both legs straight, toes pointing up and feet approximately six-inches apart. Bend forward at the hips and try to put your hands on your ankles or toes. No bouncing!",
		image: './images/pexels-gustavo-fring-4920425.jpg',
		name: 'Hamstring (Seated)'
	},
	{
		tags: ['stretch', 'groin', 'seated'],
		description:
			"Sit on the ground with the soles of your feet together and place your hands on or near your feet. Bend forward from the hips keeping the head up and hold this position.",
		image: './images/pexels-jacky-xing-776569260-29132146.jpg',
		name: 'Groin (Seated)'
	}
];            

let exerciseCard = document.querySelector('.exercise-container');
/*let button = document.querySelector('button');
button.addEventListener('click', search);*/

/*Switching to the form version of the querySelector for the button click. Choosing this method because I used a form search in Week 09 before I knew about the Hikes method. I also like that the forms can allow the enter key to search not just clicking on the button.*/

let form = document.querySelector('.exercise-search');
form.addEventListener('submit', search);

function search(event) {
    event.preventDefault();
    let exerciseQuery = document.querySelector('#search').value;

    let filterExercises = exercises.filter(function(exercise) {
        return (
            exercise.name.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.description.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.tags.find(tag => tag.toLowerCase().includes(exerciseQuery.toLowerCase()))
        );
    })

    console.log(filterExercises);

    let sortedExercises = filterExercises.sort(compareExercies);

    function compareExercies(a,b) {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
    exerciseCardinnerHTML = '';
    sortedExercises.forEach(function(exercise) {
        renderExercises(exercise);
    })
}

let randomNum = Math.floor(Math.random()* exercises.length);
console.log(randomNum);

function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join('');
}

/* This was for the recipes and I don't think I need it. Will delete if I don't need it.*/
/*function ratingTemplate(rating) {
		let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5"
>  `
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-star"> ⭐</span>`
      } else {
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
      }			
    }
    html += `</span>`
    return html
  }*/

// Template literal. 
function exercisesTemplate(exercise) {
    return `<section class="exercise-card">
        <img src="${exercise.image}" 
            alt="Photo of ${exercise.name}" 
            class="exercise-image">
        <div class="exercise-content">
            <h2 class="exercise-title">${exercise.name}</h2>
            <p class="exercise-description">${exercise.description}</p>
        </div>
</section>`
}

function renderExercises(exercise) {
    let html = exercisesTemplate(exercise);
    exerciseCard.innerHTML += html
}
function init() {
    renderExercises(exercises[randomNum]);
}

init();