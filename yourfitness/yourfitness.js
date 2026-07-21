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
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: '15',
        tags: ['muscular', 'abdomen', 'sitting', 'assisted']
    },
    {
        name: 'Push-ups',
        reps: '5-15',
        count: '2',
        description: '',
        order: '17',
        tags: ['muscular', 'arms']
    },
    {
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
        name: 'Abdominal Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stand and extend the arms upward and slightly back with fingers interlaced.',
        order: '1',
        tags: ['stretch', 'abdomen', 'standing']
    },
    {
        name: 'Chest Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Interlace fingers behind your back, lift arms, and lean forward.',
        order: '2',
        tags: ['stretch', 'chest', 'standing']
    },
    {
        name: 'Upper Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Extend your arms forward at shoulder height with palms facing outward.',
        order: '3',
        tags: ['stretch', 'back', 'standing']
    },
    {
        name: 'Rear Deltoid Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Pull one wrist behind your back while tilting your head.',
        order: '4',
        tags: ['stretch', 'shoulders', 'neck', 'standing']
    },
    {
        name: 'Overhead Arm Pull',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Stretch the triceps by pulling one elbow overhead.',
        order: '5',
        tags: ['stretch', 'triceps', 'arms', 'standing']
    },
    {
        name: 'Cat Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Arch and lower your back while on hands and knees.',
        order: '6',
        tags: ['stretch', 'back', 'kneeling']
    },
    {
        name: 'Hamstring Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit with legs straight and reach toward your feet.',
        order: '7',
        tags: ['stretch', 'hamstrings', 'legs', 'sitting']
    },
    {
        name: 'Groin Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Sit with soles of feet together and lean forward.',
        order: '8',
        tags: ['stretch', 'groin', 'hips', 'sitting']
    },
    {
        name: 'Hip and Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Cross one leg over the other and rotate your upper body.',
        order: '9',
        tags: ['stretch', 'hips', 'back', 'sitting']
    },
    {
        name: 'Lying Back Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Pull both knees toward your chest while lying on your back.',
        order: '10',
        tags: ['stretch', 'back', 'hips', 'lying']
    },
    {
        name: 'Thigh Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Pull one heel toward your buttocks while standing.',
        order: '11',
        tags: ['stretch', 'quadriceps', 'legs', 'standing']
    },
    {
        name: 'Calf Stretch',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Extend one leg and pull your toes toward your shin.',
        order: '12',
        tags: ['stretch', 'calves', 'legs', 'standing']
    },
    {
        name: 'Side Bend',
        reps: '10-30 sec',
        count: 'hold',
        description: 'Reach overhead and bend sideways without twisting.',
        order: '13',
        tags: ['stretch', 'core', 'standing']
    },

    // Muscular Fitness
    {
        name: 'Jumping Jacks',
        reps: '20',
        count: '4',
        description: '',
        order: '14',
        tags: ['cardio', 'full body', 'standing']
    },
    {
        name: 'Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: '15',
        tags: ['muscular', 'abdomen', 'assisted', 'lying']
    },
    {
        name: 'Skier',
        reps: '10',
        count: '4',
        description: 'Alternate arms and legs while jumping.',
        order: '16',
        tags: ['cardio', 'full body', 'standing']
    },
    {
        name: 'Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: '17',
        tags: ['muscular', 'chest', 'arms']
    },
    {
        name: 'Reverse Lunge',
        reps: '10',
        count: '4',
        description: 'Step backward and lower until the front thigh is parallel.',
        order: '18',
        tags: ['muscular', 'legs', 'balance', 'standing']
    },
    {
        name: 'Squat Thrusts',
        reps: '10',
        count: '4',
        description: 'Squat, kick feet back, then return to standing.',
        order: '19',
        tags: ['cardio', 'full body']
    },
    {
        name: 'Back Raises',
        reps: '5',
        count: '2',
        description: 'Raise your torso while lying face down.',
        order: '20',
        tags: ['muscular', 'back', 'assisted']
    },
    {
        name: 'Diamond Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: '21',
        tags: ['muscular', 'chest', 'triceps', 'arms']
    },
    {
        name: 'Engine',
        reps: '10',
        count: '4',
        description: 'Raise alternating knees to opposite elbows.',
        order: '22',
        tags: ['cardio', 'core', 'standing']
    },
    {
        name: 'Partial Squat',
        reps: '10',
        count: '2',
        description: '',
        order: '23',
        tags: ['muscular', 'legs', 'standing']
    },
    {
        name: 'Cross-knee Crunch',
        reps: '30',
        count: '2',
        description: '',
        order: '24',
        tags: ['muscular', 'abdomen', 'core']
    },
    {
        name: 'Mountain Climber',
        reps: '15',
        count: '4',
        description: 'Alternate legs in a plank position.',
        order: '25',
        tags: ['cardio', 'core', 'full body']
    },
    {
        name: 'Reverse Push-ups',
        reps: '5',
        count: '2',
        description: '',
        order: '26',
        tags: ['muscular', 'triceps', 'arms']
    },
    {
        name: 'Shoulder Press',
        reps: '10',
        count: '2',
        description: 'Raise arms overhead from shoulder level.',
        order: '27',
        tags: ['muscular', 'shoulders', 'arms']
    },
    {
        name: 'Cross-knee Sit-ups',
        reps: '30',
        count: '2',
        description: '',
        order: '28',
        tags: ['muscular', 'abdomen', 'assisted']
    },
    {
        name: 'Pull-ups',
        reps: 'Until failure',
        count: '1',
        description: '',
        order: '29',
        tags: ['muscular', 'back', 'arms', 'pull']
    },
    {
        name: 'Hanging Leg Raises',
        reps: 'Until failure',
        count: '1',
        description: '',
        order: '30',
        tags: ['muscular', 'abdomen', 'legs', 'hanging']
    }
];