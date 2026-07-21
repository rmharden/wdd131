const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}


/*
const exercise = [
    {
        image: '',
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: '15',
        tags: ['muscular', 'abdomen', 'sitting', 'assisted']
    },
    {
        image: '',
        name: 'Push-ups',
        reps: '5-15',
        count: '2',
        description: '',
        order: '17',
        tags: ['muscular', 'arms']
    },
    {
        image: '',
        name: 'Squats',
        reps: '10-30',
        count: '2',
        description: '',
        order: '23',
        tags: ['muscular', 'legs', 'standing']
    }
];*/

/*I gave AI my example above and I gave it my data from my exercise word document I wrote. I asked it to create my object array with my data and my example object array. Below is what ChatGPT created for me:*/

const exercise = [
    // Stretching
    {
        image: '',
        name: 'Abdominal Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand and extend the arms upward and slightly back with fingers interlaced.',
        order: '1',
        tags: ['stretch', 'abdomen', 'standing']
    },
    {
        image: '',
        name: 'Chest Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Interlace fingers behind your back, lift arms, and lean forward.',
        order: '2',
        tags: ['stretch', 'chest', 'standing']
    },
    {
        image: '',
        name: 'Upper Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Extend your arms forward at shoulder height with palms facing outward.',
        order: '3',
        tags: ['stretch', 'back', 'standing']
    },
    {
        image: '',
        name: 'Rear Deltoid Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Pull one wrist behind your back while tilting your head.',
        order: '4',
        tags: ['stretch', 'shoulders', 'neck', 'standing']
    },
    {
        image: '',
        name: 'Overhead Arm Pull',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stretch the triceps by pulling one elbow overhead.',
        order: '5',
        tags: ['stretch', 'triceps', 'arms', 'standing']
    },
    {
        image: '',
        name: 'Cat Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Arch and lower your back while on hands and knees.',
        order: '6',
        tags: ['stretch', 'back', 'kneeling']
    },
    {
        image: '',
        name: 'Hamstring Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit with legs straight and reach toward your feet.',
        order: '7',
        tags: ['stretch', 'hamstrings', 'legs', 'sitting']
    },
    {
        image: '',
        name: 'Groin Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit with soles of feet together and lean forward.',
        order: '8',
        tags: ['stretch', 'groin', 'hips', 'sitting']
    },
    {
        image: '',
        name: 'Hip and Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Cross one leg over the other and rotate your upper body.',
        order: '9',
        tags: ['stretch', 'hips', 'back', 'sitting']
    },
    {
        image: '',
        name: 'Lying Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Pull both knees toward your chest while lying on your back.',
        order: '10',
        tags: ['stretch', 'back', 'hips', 'lying']
    },
    {
        image: '',
        name: 'Thigh Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Pull one heel toward your buttocks while standing.',
        order: '11',
        tags: ['stretch', 'quadriceps', 'legs', 'standing']
    },
    {
        image: '',
        name: 'Calf Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Extend one leg and pull your toes toward your shin.',
        order: '12',
        tags: ['stretch', 'calves', 'legs', 'standing']
    },
    {
        image: '',
        name: 'Side Bend',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Reach overhead and bend sideways without twisting.',
        order: '13',
        tags: ['stretch', 'core', 'standing']
    },

    // Muscular Fitness
    {
        image: '',
        name: 'Jumping Jacks',
        reps: '20',
        count: '4',
        description: '',
        order: '14',
        tags: ['cardio', 'full body', 'standing']
    },
    {
        image: '',
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: '15',
        tags: ['muscular', 'abdomen', 'assisted', 'lying']
    },
    {
        image: '',
        name: 'Skier',
        reps: '10',
        count: '4',
        description: 'Alternate arms and legs while jumping.',
        order: '16',
        tags: ['cardio', 'full body', 'standing']
    },
    {
        image: '',
        name: 'Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: '17',
        tags: ['muscular', 'chest', 'arms']
    },
    {
        image: '',
        name: 'Reverse Lunge',
        reps: '10',
        count: '4',
        description: 'Step backward and lower until the front thigh is parallel.',
        order: '18',
        tags: ['muscular', 'legs', 'balance', 'standing']
    },
    {
        image: '',
        name: 'Squat Thrusts',
        reps: '10',
        count: '4',
        description: 'Squat, kick feet back, then return to standing.',
        order: '19',
        tags: ['cardio', 'full body']
    },
    {
        image: '',
        name: 'Back Raises',
        reps: '5',
        count: '2',
        description: 'Raise your torso while lying face down.',
        order: '20',
        tags: ['muscular', 'back', 'assisted']
    },
    {
        image: '',
        name: 'Diamond Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: '21',
        tags: ['muscular', 'chest', 'triceps', 'arms']
    },
    {
        image: '',
        name: 'Engine',
        reps: '10',
        count: '4',
        description: 'Raise alternating knees to opposite elbows.',
        order: '22',
        tags: ['cardio', 'core', 'standing']
    },
    {
        image: '',
        name: 'Partial Squat',
        reps: '10',
        count: '2',
        description: '',
        order: '23',
        tags: ['muscular', 'legs', 'standing']
    },
    {
        image: '',
        name: 'Cross-knee Crunch',
        reps: '30',
        count: '2',
        description: '',
        order: '24',
        tags: ['muscular', 'abdomen', 'core']
    },
    {
        image: '',
        name: 'Mountain Climber',
        reps: '15',
        count: '4',
        description: 'Alternate legs in a plank position.',
        order: '25',
        tags: ['cardio', 'core', 'full body']
    },
    {
        image: '',
        image: '',
        name: 'Reverse Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: '26',
        tags: ['muscular', 'triceps', 'arms']
    },
    {
        image: 'images/pexels-beniam-447198297-33650005.jpg',
        name: 'Shoulder Press',
        reps: '10',
        count: '2',
        description: 'Raise arms overhead from shoulder level.',
        order: '27',
        tags: ['muscular', 'shoulders', 'arms']
    },
    {
        image: '',
        name: 'Cross-knee Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: '28',
        tags: ['muscular', 'abdomen', 'assisted']
    },
    {
        image: '',
        name: 'Pull-ups',
        reps: 'Until failure',
        count: '1',
        description: '',
        order: '29',
        tags: ['muscular', 'back', 'arms', 'pull']
    },
    {
        image: '',
        name: 'Hanging Leg Raises',
        reps: 'Until failure',
        count: '1',
        description: '',
        order: '30',
        tags: ['muscular', 'abdomen', 'legs', 'hanging']
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
    let excerciseQuery = document.querySelector('#search').value;

    let filterExercises = exercises.filter(function(exercise) {
        return (
            exercise.name.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.description.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.tags.find(tag => tag.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.exerciseIngredient.find(ingredient => ingredient.toLowerCase().includes(exerciseQuery.toLowerCase())))
        );
    })

    console.log(filterExercises);

    let sortedExercises = filterExercises.sort(compareExercises);

    function compareExercises(a,b) {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
    exerciseCard.innerHTML = '';
    sortedExercises.forEach(function(exercise) {
        renderExercises(exercise);
    })
}

let randomNum = Math.floor(Math.random()* exercises.length);
console.log(randomNum);

function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join('');
}
// Template literal. 
function exercisesTemplate(exercise) {
    return `<section class="exercise-card">
        <img src="${exercise.image}" 
            alt="Photo of ${exercise.name}" 
            class="exercise-image">
        <div class="exercise-content">
            <div class="exercise-type">
            	${tagTemplate(exercise.tags)}
			</div>
			<h2 class="exercise-title">${exercise.name}</h2>
            	${ratingTemplate(exercise.rating)}
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