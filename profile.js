const colorBtn = document.querySelector('#color');
const PlaceBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

const myFavoriteColor = () => alert('My favorite color is White :)');
const myFavoritePlace = () => alert('My favorite place is Paris!');
const myFavoriteRitual = () => alert('My favorite ritual is practicing yoga and having an active lifestyle.');

colorBtn.addEventListener('click', myFavoriteColor);
PlaceBtn.addEventListener('click', myFavoritePlace);
ritualBtn.addEventListener('click', myFavoriteRitual);

