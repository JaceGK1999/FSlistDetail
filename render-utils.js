export function renderListItem(food) {
    const div = document.createElement('div');
    div.classList.add('food');

    const a = document.createElement('a');
    a.href = `./food/?id=${food.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${food.name}.png`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = food.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = food.color;

    const spanType = document.createElement('span');
    span.textContent = food.type;

    a.append(img, nameSpan, span, spanType);
    div.append(a);
    return div;
}
