

function drawAllElem() {
    let todoItems = document.querySelectorAll('.todo-panel__item');
        todoItems.forEach((item) => item.classList.remove('hidden'))
}

export { drawAllElem }