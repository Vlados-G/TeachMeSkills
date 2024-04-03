

function drawCompleted() {

    let todoItems = document.querySelectorAll('.todo-panel__item');
    console.log(todoItems);
        todoItems.forEach((item) => {
            (item.classList.contains('completed')) ? item.classList.remove('hidden') : item.classList.add('hidden')
        })
}

export { drawCompleted }