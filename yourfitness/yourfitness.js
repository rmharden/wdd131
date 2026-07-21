const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}


/*
const exercises = [
    {
        image: 'images/grok-imagine-sit-up-001.jpg',
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: 15,
        tags: ['muscular', 'abdomen', 'sitting', 'assisted']
    },
    {
        image: 'images/pexels-fernando-capetillo-94107723-38167588.jpg',
        name: 'Push-ups',
        reps: '5-15',
        count: '2',
        description: '',
        order: 17,
        tags: ['muscular', 'arms']
    },
    {
        image: '',
        name: 'Squats',
        reps: '10-30',
        count: '2',
        description: '',
        order: 23,
        tags: ['muscular', 'legs', 'standing']
    }
];*/

/*I gave AI my example above and I gave it my data from my exercise word document I wrote. I asked it to create my object array with my data and my example object array. Below is what ChatGPT created for me:*/

const exercises = [
    // Stretching
    {
        image: 'images/grok-imagine-ab-stretch.jpg',
        name: 'Abdominal Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand and extend the arms upward and over the head. Interlace your fingers with your palms up and stretch your arms up and slightly back.',
        order: 1,
        tags: ['stretch', 'abdomen', 'standing']
    },
    {
        image: 'images/pexels-cottonbro-6293250.jpg',
        name: 'Chest Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand and interlace your fingers behind your back. Lift your arms behind your back so they move outward and away from your body, then lean forward from the waist. Bend your knees, lower your arms and return to the upright position.',
        order: 2,
        tags: ['stretch', 'chest', 'standing']
    },
    {
        image: 'images/pexels-eren-li-7241484.jpg',
        name: 'Upper Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand with your arms extended to the front at shoulder height with your fingers interlaced, and your palms facing outward. Extend your arms and shoulders forward.',
        order: 3,
        tags: ['stretch', 'back', 'standing']
    },
    {
        image: 'images/grok-imagine-rear-deltoid-stretch.jpg',
        name: 'Rear Deltoid Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand with your feet shoulder width apart and your arms behind your body. With your right hand, grasp your left wrist behind your body and pull down and to the right. Tilt your head to the right. Return to the starting position and repeat with opposite arm.',
        order: 4,
        tags: ['stretch', 'shoulders', 'neck', 'standing']
    },
    {
        image: 'images/pexels-ketut-subiyanto-5037359-overhead-arm-pull.jpg',
        name: 'Overhead Arm Pull',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand with your feet shoulder width apart. Raise your left arm, bend your left elbow and place your left palm in the center of your back at the base of the neck. Gently pull your elbow with your right hand. Return to the starting position and repeat the procedures with the opposite arm.',
        order: 5,
        tags: ['stretch', 'triceps', 'arms', 'standing']
    },
    {
        image: 'images/pexels-anastasia-shuraeva-7663227.jpg',
        name: 'Cat Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Get on your hands and knees. Slowly arch your back upward. Bring your back down to the starting position.',
        order: 6,
        tags: ['stretch', 'back', 'kneeling']
    },
    {
        image: 'images/pexels-shvetsa-5068688.jpg',
        name: 'Hamstring Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit on the ground with both legs straight, toes pointing up and feet approximately six-inches apart. Bend forward at the hips and try to put your hands on your ankles or toes. Do not bounce',
        order: 7,
        tags: ['stretch', 'hamstrings', 'legs', 'sitting']
    },
    {
        image: 'images/pexels-ivan-s-4164755.jpg',
        name: 'Groin Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit on the ground with the soles of your feet together and place your hands on or near your feet. Bend forward from the hips keeping the head up and hold this position.',
        order: 8,
        tags: ['stretch', 'groin', 'hips', 'sitting']
    },
    {
        image: 'images/pexels-alexy-almond-3756514.jpg',
        name: 'Hip and Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit on the ground with your right leg forward and straight. Cross your left leg over your right. While sitting erect, place your left foot flat on the ground near your right knee. Keep the heels of both feet in contact with the ground. Slowly rotate your upper body to the left and look over you left shoulder. Reach across your left leg with your right arm and place your right elbow across your knee and gently push your left leg to the right with your elbow. Use your left hand to support your body by placing it on the ground. Repeat the stretch for the other side by crossing the opposite leg and turning in the opposite direction.',
        order: 9,
        tags: ['stretch', 'hips', 'back', 'sitting']
    },
    {
        image: 'images/grok-imagine-lying-back-stretch.jpg',
        name: 'Lying Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Lying on your back, bring both knees to your chest and grab your legs below the knee or over the knee. Pull both knees slowly toward your shoulders.',
        order: 10,
        tags: ['stretch', 'back', 'hips', 'lying']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4909526.jpg',
        name: 'Thigh Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand and bend your left leg up toward your buttocks. Grasp the toes of your left foot with your hand and pull your heel to your left buttock. Return to the standing position and repeat the procedures with your right foot.',
        order: 11,
        tags: ['stretch', 'quadriceps', 'legs', 'standing']
    },
    {
        image: 'images/pexels-jacky-xing-776569260-29132146.jpg',
        name: 'Calf Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand and fully extend your left leg in front of you and place the heel of your left foot on the ground. Bend forward at the waist and slightly bend your right knee. Reach down and pull the toes of your left foot toward your shin. Slowly return to the starting position and repeat the same procedures with the opposite leg.',
        order: 12,
        tags: ['stretch', 'calves', 'legs', 'standing']
    },
    {
        image: 'images/pexels-nay-nyo-727253247-31480319.jpg',
        name: 'Side Bend',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand straight with your feet shoulder width apart. With your right hand extended overhead, place your left hand on your left hip. Bend at the waist to the left until the point of gentle tension. Return to the straight up position. With your left hand extended overhead and your right hand on your right hip, bend at the waist to the right until the point of gentle tension. Do not twist the body.',
        order: 13,
        tags: ['stretch', 'core', 'standing']
    },

    // Muscular Fitness
    {
        image: 'images/pexels-adrianlimani-34219376.jpg',
        name: 'Jumping Jacks',
        reps: '20',
        count: '4',
        description: 'Stand with feet together and hands at your sides. On count 1, jump and land with your feet apart (shoulder-width) while raising your arms straight overhead. On count 2, return to the starting position. Repeat for the required repetitions, maintaining controlled form.',
        order: 14,
        tags: ['cardio', 'full body', 'standing']
    },
    {
        image: 'images/grok-imagine-sit-up-001.jpg',
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: 15,
        tags: ['muscular', 'abdomen', 'assisted', 'lying']
    },
    {
        image: 'images/grok-imagine-skier-20260721.jpg',
        name: 'Skier',
        reps: '10',
        count: '4',
        description: 'Assume the starting position of the exercise with your left leg and right arm forward and your right leg and left arm back. Your feet should be approximately 12 inches apart from toe to heel. While jumping slightly in the air, alternate your feet each time you land and swing the arms with coordinated arm-swing.',
        order: 16,
        tags: ['cardio', 'full body', 'standing']
    },
    {
        image: 'images/pexels-fernando-capetillo-94107723-38167588.jpg',
        name: 'Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: 17,
        tags: ['muscular', 'chest', 'arms']
    },
    {
        image: 'images/',
        name: 'Reverse Lunge',
        reps: '10',
        count: '4',
        description: 'Step backward and lower until the front thigh is parallel.',
        order: 18,
        tags: ['muscular', 'legs', 'balance', 'standing']
    },
    {
        image: 'images/',
        name: 'Squat Thrusts',
        reps: '10',
        count: '4',
        description: 'Squat, kick feet back, then return to standing.',
        order: 19,
        tags: ['cardio', 'full body']
    },
    {
        image: 'images/',
        name: 'Back Raises',
        reps: '5',
        count: '2',
        description: 'Raise your torso while lying face down.',
        order: 20,
        tags: ['muscular', 'back', 'assisted']
    },
    {
        image: 'images/',
        name: 'Diamond Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: 21,
        tags: ['muscular', 'chest', 'triceps', 'arms']
    },
    {
        image: 'images/',
        name: 'Engine',
        reps: '10',
        count: '4',
        description: 'Raise alternating knees to opposite elbows.',
        order: 22,
        tags: ['cardio', 'core', 'standing']
    },
    {
        image: 'images/',
        name: 'Partial Squat',
        reps: '10',
        count: '2',
        description: '',
        order: 23,
        tags: ['muscular', 'legs', 'standing']
    },
    {
        image: 'images/',
        name: 'Cross-knee Crunch',
        reps: '30',
        count: '2',
        description: '',
        order: 24,
        tags: ['muscular', 'abdomen', 'core']
    },
    {
        image: 'images/',
        name: 'Mountain Climber',
        reps: '15',
        count: '4',
        description: 'Alternate legs in a plank position.',
        order: 25,
        tags: ['cardio', 'core', 'full body']
    },
    {
        image: 'images/',
        name: 'Reverse Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: 26,
        tags: ['muscular', 'triceps', 'arms']
    },
    {
        image: 'images/pexels-beniam-447198297-33650005.jpg',
        name: 'Shoulder Press',
        reps: '10',
        count: '2',
        description: 'Raise arms overhead from shoulder level.',
        order: 27,
        tags: ['muscular', 'shoulders', 'arms']
    },
    {
        image: 'images/',
        name: 'Cross-knee Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: 28,
        tags: ['muscular', 'abdomen', 'assisted']
    },
    {
        image: 'images/',
        name: 'Pull-ups',
        reps: 'Until failure',
        count: '1',
        description: '',
        order: 29,
        tags: ['muscular', 'back', 'arms', 'pull']
    },
    {
        image: 'images/',
        name: 'Hanging Leg Raises',
        reps: 'Until failure',
        count: '1',
        description: '',
        order: 30,
        tags: ['muscular', 'abdomen', 'legs', 'hanging']
    }
];
let exerciseCard = document.querySelector('.exercise-card-container');
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

    let sortedExercises = filterExercises.sort(compareExercises);

    function compareExercises(a,b) {
        if (a.order < b.order) {
            return -1;
        } else if (a.order > b.order) {
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