import { showPanelSearch } from "../render/showPanel.js";
import { arrTodo } from "../app.js";

function searchElems() {
    let value = showPanelSearch.value.trim().toLowerCase();
    if (!value) {
        alert('Enter the correct data!');
        showPanelSearch.value = '';
    };

    let searchData = arrTodo.filter((item) => item.name.toLowerCase().includes(value));
    console.log(searchData);
    if (!searchData.length) {
        alert(`${value} - not found!`);
        showPanelSearch.value = '';
        return;
    }

    let todoItems = document.querySelectorAll('.todo-panel__item');
    console.log(todoItems);
        todoItems.forEach((item) => {
            let checkId = searchData.find(elem => item.id == ('item-' + elem.id));
            console.log(checkId);
		    (checkId) ? item.classList.remove('hidden') : item.classList.add('hidden');
        })
        showPanelSearch.value = '';
}

export { searchElems }