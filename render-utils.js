export function renderListItem(food) {
    const div = document.createElement('div');
    div.classList.add('food');

    const a = document.createElement('a');
    a.href = `./animals/?id=${food.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${food.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = food.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = food.color;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}