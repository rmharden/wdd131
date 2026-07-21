const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}



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
]