const exercises = [
    {
        name: 'Sit-ups',
        repetitions: '10-30',
        count: '2',
        description: 'Keep feet flat on the ground. If needed, a friend can hold your feet down. Place your hands on opposite sholders. Keep your arms and elbows against your chest. Tighten your abdominals and bring your torso up. Touch your elbows or arms to your knees and return to the starting position. No rocking or using momentum to sit up. Begin by laying face-up on the ground. Cross arms over chest and place hands on opposite shoulders. Elbows must not touch your knees or thighs on the way up. Touch your shoulder blades on the ground. Keep your feet in contact with the floor. A partner may hold them if needed. Bend your knees at 90 degrees. Raise your upper torso until your elbows touch your knees or thighs. Return to the starting position. Do not use momentum or pull on your neck. Focus on core contraction as you sit-up.</',
        image: 'images/grok-imagine-sit-up-001.jpg',
        tags: ['sit-ups', 'muscular fitness', 'calesthinics', 'assisted', 'abdominal', 'generator'],
        group: ['Muscular Fitness', 'Calesthincs', 'Generator'],
        order: 2
    },
    {
        name: 'Push-ups',
        repetitions: '5-30',
        count: '2',
        description: 'Maintain a rigid, straight line from head to heels with feet up to 12 inches apart. Hands are placed slightly wider than shoulder-width apart. Lower your body until your upper arms are parallel to the floor (90-degree elbow bend), then push back up until arms are fully extended.',
        image: 'images/pexels-kseniachernaya-7302890.jpg',
        tags: ['push-ups', 'muscular fitness', 'calesthinics', 'arms', 'generator'],
        group: ['Muscular Fitness', 'Calesthincs', 'Generator'],
        order: 4
    },
    {
        name: 'Squats',
        repetitions: '10',
        count: '2',
        description: 'Feet shoulder-width apart, chest up, core engaged. Lower until thighs are parallel, then stand by driving through your heels.',
        image: 'images/pexels-kindelmedia-7935630.jpg',
        tags: ['squats', 'muscular fitness', 'calesthinics', 'assisted', 'glutes', 'legs', 'generator'],
        group: ['Muscular Fitness', 'Calesthincs', 'Generator'],
        order: 10
    }
];

let exerciseCard = document.querySelector('.exercise-container');

let form = document.querySelector('.exercise-search');
form.addEventListener('submit', search);

function search(event) {
    event.preventDefault();
    let exerciseQuery = document.querySelector('#search').ariaValueMax;

    let filterExercises = exercises.filter(function(exercise) {
        return (
            exercise.name.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.description.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.tags.find(tag => tag.toLowerCase().includes(exerciseQuery.toLowerCase()) || exercise.group.find(group => group.toLocaleLowerCase().includes(exerciseQuery.toLowerCase())))
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
