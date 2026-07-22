const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}
const exercises = [
    // Stretching
    {
        image: 'images/grok-imagine-ab-stretch.jpg',
        name: 'Abdominal Stretch',
        reps: '0',
        count: '10-30',
        description: 'Stand and extend the arms upward and over the head. Interlace your fingers with your palms up and stretch your arms up and slightly back.',
        order: 1,
        tags: ['stretch', 'abdomen', 'standing', 'core']
    },
    {
        image: 'images/pexels-cottonbro-6293250.jpg',
        name: 'Chest Stretch',
        reps: '0',
        count: '10-30',
        description: 'Stand and interlace your fingers behind your back. Lift your arms behind your back so they move outward and away from your body, then lean forward from the waist. Bend your knees, lower your arms and return to the upright position.',
        order: 2,
        tags: ['stretch', 'chest', 'standing']
    },
    {
        image: 'images/pexels-eren-li-7241484.jpg',
        name: 'Upper Back Stretch',
        reps: '0',
        count: '10-30',
        description: 'Stand with your arms extended to the front at shoulder height with your fingers interlaced, and your palms facing outward. Extend your arms and shoulders forward.',
        order: 3,
        tags: ['stretch', 'back', 'standing']
    },
    {
        image: 'images/grok-imagine-rear-deltoid-stretch.jpg',
        name: 'Rear Deltoid Stretch',
        reps: '0',
        count: '10-30',
        description: 'Stand with your feet shoulder width apart and your arms behind your body. With your right hand, grasp your left wrist behind your body and pull down and to the right. Tilt your head to the right. Return to the starting position and repeat with opposite arm.',
        order: 4,
        tags: ['stretch', 'shoulders', 'neck', 'standing']
    },
    {
        image: 'images/pexels-ketut-subiyanto-5037359-overhead-arm-pull.jpg',
        name: 'Overhead Arm Pull',
        reps: '0',
        count: '10-30',
        description: 'Stand with your feet shoulder width apart. Raise your left arm, bend your left elbow and place your left palm in the center of your back at the base of the neck. Gently pull your elbow with your right hand. Return to the starting position and repeat the procedures with the opposite arm.',
        order: 5,
        tags: ['stretch', 'triceps', 'arms', 'standing']
    },
    {
        image: 'images/pexels-anastasia-shuraeva-7663227.jpg',
        name: 'Cat Stretch',
        reps: '0',
        count: '10-30',
        description: 'Get on your hands and knees. Slowly arch your back upward. Bring your back down to the starting position.',
        order: 6,
        tags: ['stretch', 'back', 'kneeling']
    },
    {
        image: 'images/pexels-shvetsa-5068688.jpg',
        name: 'Hamstring Stretch',
        reps: '0',
        count: '10-30',
        description: 'Sit on the ground with both legs straight, toes pointing up and feet approximately six-inches apart. Bend forward at the hips and try to put your hands on your ankles or toes. Do not bounce.',
        order: 7,
        tags: ['stretch', 'hamstrings', 'legs', 'sitting']
    },
    {
        image: 'images/pexels-ivan-s-4164755.jpg',
        name: 'Groin Stretch',
        reps: '0',
        count: '10-30',
        description: 'Sit on the ground with the soles of your feet together and place your hands on or near your feet. Bend forward from the hips keeping the head up and hold this position.',
        order: 8,
        tags: ['stretch', 'groin', 'hips', 'sitting']
    },
    {
        image: 'images/pexels-alexy-almond-3756514.jpg',
        name: 'Hip and Back Stretch',
        reps: '0',
        count: '10-30',
        description: 'Sit on the ground with your right leg forward and straight. Cross your left leg over your right. While sitting erect, place your left foot flat on the ground near your right knee. Keep the heels of both feet in contact with the ground. Slowly rotate your upper body to the left and look over you left shoulder. Reach across your left leg with your right arm and place your right elbow across your knee and gently push your left leg to the right with your elbow. Use your left hand to support your body by placing it on the ground. Repeat the stretch for the other side by crossing the opposite leg and turning in the opposite direction.',
        order: 9,
        tags: ['stretch', 'hips', 'back', 'sitting']
    },
    {
        image: 'images/grok-imagine-lying-back-stretch.jpg',
        name: 'Lying Back Stretch',
        reps: '0',
        count: '10-30',
        description: 'Lying on your back, bring both knees to your chest and grab your legs below the knee or over the knee. Pull both knees slowly toward your shoulders.',
        order: 10,
        tags: ['stretch', 'back', 'hips', 'lying']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4909526.jpg',
        name: 'Thigh Stretch',
        reps: '0',
        count: '10-30',
        description: 'Stand and bend your left leg up toward your buttocks. Grasp the toes of your left foot with your hand and pull your heel to your left buttock. Return to the standing position and repeat the procedures with your right foot.',
        order: 11,
        tags: ['stretch', 'quadriceps', 'legs', 'standing']
    },
    {
        image: 'images/pexels-jacky-xing-776569260-29132146.jpg',
        name: 'Calf Stretch',
        reps: '0',
        count: '10-30',
        description: 'Stand and fully extend your left leg in front of you and place the heel of your left foot on the ground. Bend forward at the waist and slightly bend your right knee. Reach down and pull the toes of your left foot toward your shin. Slowly return to the starting position and repeat the same procedures with the opposite leg.',
        order: 12,
        tags: ['stretch', 'calves', 'legs', 'standing']
    },
    {
        image: 'images/pexels-nay-nyo-727253247-31480319.jpg',
        name: 'Side Bend',
        reps: '0',
        count: '10-30',
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
        tags: ['cardio', 'full body', 'standing', 'calisthenics']
    },
    {
        image: 'images/pexels-rdne-8401799.jpg',
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: 'Lie on your back with feet together (or up to 12 inches apart), knees bent at about 90 degrees, and a partner holding your ankles or your feet. Cross your arms over your chest with hands on your shoulders or upper chest. Curl your upper body forward until your elbows touch your knees or thighs, then lower until your shoulder blades to the ground. This completes one repetition. Maintain steady form without using momentum.',
        order: 15,
        tags: ['muscular', 'abdomen', 'assisted', 'lying', 'calisthenics']
    },
    {
        image: 'images/grok-imagine-skier-20260721.jpg',
        name: 'Skier',
        reps: '10',
        count: '4',
        description: 'Assume the starting position of the exercise with your left leg and right arm forward and your right leg and left arm back. Your feet should be approximately 12 inches apart from toe to heel. While jumping slightly in the air, alternate your feet each time you land and swing the arms with coordinated arm-swing.',
        order: 16,
        tags: ['cardio', 'full body', 'standing', 'calisthenics']
    },
    {
        image: 'images/pexels-yankrukov-8436439.jpg',
        name: 'Push-ups',
        reps: '5',
        count: '2',
        description: 'Start in a plank-like position with arms shoulder-width apart and feet together or up to 12 inches apart. Keep your body in a straight line from head to heels. Lower your body until your upper arms are parallel to the ground (elbows bent at about 90 degrees) and then push back up until your arms are fully extended (but not locked). This completes one repetition—keep your body rigid and avoid sagging or piking. Alternate between Push-ups and Reverse Lunge for 3 sets.',
        order: 17,
        tags: ['muscular', 'chest', 'arms', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-shvetsa-5067670.jpg',
        name: 'Reverse Lunge',
        reps: '10',
        count: '4',
        description: 'Stand with your hands on your waist and your feet spread approximately 6 inches apart. Step back with your left foot. Keeping your back straight, bend at the knees until your right thigh is parallel to the ground. Using your right leg, push your body to the starting position and then alternate legs.Alternate between Push-ups and Reverse Lunge for 3 sets.',
        order: 18,
        tags: ['muscular', 'legs', 'balance', 'standing', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-fernando-capetillo-94107723-38167588.jpg',
        name: 'Squat Thrusts',
        reps: '10',
        count: '4',
        description: 'Squat down until your hands are on the ground by your feet. Kick you feet back (push up position). Bring your feet back to the starting position so that you are standing straight up.',
        order: 19,
        tags: ['cardio', 'full body', 'calisthenics']
    },
    {
        image: 'images/grock-imagine-back-raise.jpg',
        name: 'Back Raises',
        reps: '5',
        count: '2',
        description: 'Lie on your stomach. Place your hands behind your head and interlace your fingers. Have a spotter hold your feet. With a steady, controlled motion, raise your torso until your chest clears the ground. Do not tighten your leg muscles.',
        order: 20,
        tags: ['muscular', 'back', 'assisted', 'calisthenics']
    },
    {
        image: 'images/grok-pexel-diamond-pushup.jpg',
        name: 'Diamond Push-ups',
        reps: '5',
        count: '2',
        description: 'Start in the plank-like position and place your hands close together on the ground directly under your chest so your thumbs and index fingers form a diamond (or triangle) shape. Keep your body in a straight line from head to heels. Lower your chest toward the diamond until your upper arms are approximately parallel to the ground. Push back up until your arms are fully extended. Maintain a rigid body position. No sagging hips or piking. Perform with controlled form. Alternate between Diamond Push-ups and Engine for 3 sets.',
        order: 21,
        tags: ['muscular', 'chest', 'triceps', 'arms', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-roman-odintsov-8084797.jpg',
        name: 'Engine',
        reps: '10',
        count: '4',
        description: 'Stand with your arms straight in front of your body, your arms should be parallel to the ground with your palms facing downward. Bring your left knee upward to your elbow until your thigh is parallel to the ground. Return back to the starting position and then alternate legs. Alternate between Diamond Push-ups and Engine for 3 sets.',
        order: 22,
        tags: ['cardio', 'core', 'standing', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-kampus-8638042.jpg',
        name: 'Partial Squat',
        reps: '10',
        count: '2',
        description: 'Start with feet shoulder-width apart. Bend your knees and lower your hips into a partial squat (typically to about 45-90 degrees at the knees, or halfway down). Keep your chest up, back straight, and weight on your heels. Your thighs should not go below parallel in a true partial/half squat. Then drive through your heels to return to the starting position. Perform with controlled movement and maintain good posture throughout.',
        order: 23,
        tags: ['muscular', 'legs', 'standing', 'calisthenics']
    },
    {
        image: 'images/grok-imagine-sit-up-001.jpg',
        name: 'Cross-knee Crunch',
        reps: '30',
        count: '2',
        description: 'Lie on your back with your hands behind your head or lightly touching your ears (do not pull on your neck). Raise your shoulders off the ground into a crunch position while bringing one knee toward your chest and rotating your opposite elbow across your body to meet it (or toward the knee). Alternate sides in a controlled, twisting motion. Keep your lower back pressed to the ground and avoid pulling on your head. Each side-to-side movement typically counts as one repetition.',
        order: 24,
        tags: ['muscular', 'abdomen', 'core', 'obliques', 'calisthenics']
    },
    {
        image: 'images/grok-imagine-pexels-mountain-climber.jpg',
        name: 'Mountain Climber',
        reps: '15',
        count: '4',
        description: 'Squat down until your hands are on the ground by your feet. Fully extend your left leg out keeping your right knee tucked near your chest. Bring your left knee into your chest while extending your right leg and continue alternating legs for the required count.',
        order: 25,
        tags: ['cardio', 'core', 'full body', 'calisthenics']
    },
    {
        image: 'images/pexels-gustavo-fring-6496123.jpg',
        name: 'Reverse Push-ups',
        reps: '5',
        count: '2',
        description: 'Start in a reverse plank position: Sit on the ground with your legs extended straight in front of you, hands placed on the floor just behind your hips (fingers pointing forward or slightly outward), and lift your hips so your body forms a straight line from head to heels (facing upward). From there, bend your elbows to slowly lower your hips and upper body toward the ground without touching it. Press through your hands to push back up to the full reverse plank position. Keep your body straight, core tight, and elbows pointing back throughout the movement. This primarily targets the triceps, shoulders, and core. Alternate between Reverse Push-ups and Shoulder Press for 3 sets. ',
        order: 26,
        tags: ['muscular', 'triceps', 'arms', 'shoulders', 'core', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-beniam-447198297-33650005.jpg',
        name: 'Shoulder Press',
        reps: '10',
        count: '2',
        description: 'From the starting position extend your arms overhead and legs straight in front. Lower your hands down to your shoulders. Squeeze your shoulder blades together. Return to the starting position. Alternate between Reverse Push-ups and Shoulder Press for 3 sets. ',
        order: 27,
        tags: ['muscular', 'shoulders', 'arms', 'alternate', 'calisthenics']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4853726.jpg',
        name: 'Cross-knee Sit-ups',
        reps: '30',
        count: '2',
        description: 'Lie on your back with knees bent and feet flat on the ground (or held by a partner). Place your hands behind your head or crossed over your chest. Curl your upper body off the ground into a full sit-up while bringing one knee toward your chest and rotating your opposite elbow across your body to meet or pass the knee. Lower back down under control, then repeat on the opposite side. Keep your lower back pressed to the ground during the lowering phase and avoid pulling on your neck. Each side counts as one repetition.',
        order: 28,
        tags: ['muscular', 'abdomen', 'assisted', 'calisthenics']
    },
    {
        image: 'images/pexels-tima-miroshnichenko-6389082.jpg',
        name: 'Pull-ups',
        reps: 'Until failure',
        count: '2',
        description: "Start by hanging from a pull-up bar with palms facing away (overhand grip) and hands at about shoulder-width apart with arms fully extended and body straight. Pull your body upward in a controlled motion until your chin clears the bar. Then lower yourself back down until your arms are fully extended. Avoid swinging or kicking your legs for momentum—keep your core tight. Each full up-and-down movement counts as one repetition.",
        order: 29,
        tags: ['muscular', 'back', 'arms', 'pull', 'shoulders', 'pull-up', 'bar', 'calisthenics']
    },
    {
        image: 'images/pexels-ketut-subiyanto-4803683.jpg',
        name: 'Hanging Leg Raises',
        reps: 'Until failure',
        count: '2',
        description: 'Hang from a pull-up bar with an overhand grip, arms fully extended, and body straight (or with a slight bend in the knees if needed). Keeping your legs together, raise them upward in a controlled motion and contracting your abs—aim to bring your knees or straight legs to a sitting position. Slowly lower your legs back to the starting position without swinging. Avoid using momentum; focus on core control throughout. Each full raise and lower counts as one repetition.',
        order: 30,
        tags: ['muscular', 'abdomen', 'arms', 'hanging', 'core', 'bar', 'calisthenics']
    }
];
let exerciseCard = document.querySelector('.exercise-card-container');

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

function exercisesTemplate(exercise) {
    return `<section class="exercise-card">
        <img src="${exercise.image}" 
            alt="Photo of ${exercise.name}" 
            class="exercise-image">
        <div class="exercise-content">
			<h2 class="exercise-title">${exercise.name}</h2>
            <p class="exercise-count">Count: ${exercise.count}</p>
            <p class="exercise-rep">Repetition: ${exercise.reps}</p>
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

const generatorForm = document.querySelector(".repetition-generator");
const workoutResults = document.querySelector(".workout-generator-results");

generatorForm.addEventListener("submit", generateWorkout);