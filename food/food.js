import { foods } from '../data.js';

const foodName = document.getElementById('food-name');
const foodImage = document.getElementById('food-image');

function findById(id, data) {
    return data.find((item) => item.id === id);
}

const params = new URLSearchParams(window.location.search);
const food = findById(params.get('id'), foods);
foodName.textContent = food.name;
foodImage.src = `../assets/${food.name}.svg`;
