/*
this site was used to learn how to convert the user input into a number:
https://www.w3schools.com/js/js_type_conversion.asp

This site was used to learn more about for loops:
https://www.w3schools.com/js/js_loop_for.asp
*/

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
        description: 'Feet should be shoulder-width apart. Keep your chest up and core engaged. Lower until thighs are parallel then stand by driving through your heels.',
        image: 'images/pexels-kindelmedia-7935630.jpg',
        tags: ['squats', 'muscular fitness', 'calesthinics', 'assisted', 'glutes', 'legs', 'generator'],
        group: ['Muscular Fitness', 'Calesthincs', 'Generator'],
        order: 10
    }
];

const form = document.querySelector("#repetition-generator");
form.addEventListener("submit", generateWorkout);
function generateWorkout(event) {
    event.preventDefault();

    const startingReps = document.querySelector("#repNumber");
    const repInput = Number(startingReps.value);
    console.log(repInput);

    const sessionArray = [];
    for (let i = 0; i < 6; i++) {
        const currentReps = repInput + i;
        sessionArray.push(currentReps);
    }
    console.log(sessionArray);
}