import { header } from "./render/header.js";
import {actionPanel, actionPanelDltAll,	actionPanelDlt,	actionPanelCreatrToDo,	actionPanelTextfield,	actionPanelAdd} from "./render/actionPanel.js";
import { showPanel, showPanelCount, showPanelCountComplt, showPanelAll,	showPanelComplt, showPanelSearch} from "./render/showPanel.js";
import { todoPanel } from "./render/todoPanel.js";
import { deleteAll } from "./function/deleteAll.js";
import { countAll, countComplt } from "./function/count.js";
import { drawAllElem } from "./function/drawAll.js";
import { drawCompleted } from "./function/drawCompleted.js";
import { searchElems } from "./function/searchElems.js";
import { clearTextfield } from "./function/clearTextField.js";
import { getStorage, updateStorage, clearStorage } from "./function/storage.js";

export let arrTodo = JSON.parse(getStorage('todoData')) || [];

export function app() {
	let	root = document.getElementById("root");
    countAll()
    countComplt()
	//Header

	//Action panel

	actionPanelDltAll.addEventListener("click", deleteAll);

	actionPanelDlt.addEventListener("click", deleteLast);

	actionPanelTextfield.addEventListener("keyup", function (e) {
		if (e.key === "Enter") {
			addTodo();
			clearTextfield();
		}
	});

	actionPanelAdd.addEventListener("click", addTodo);
	actionPanelAdd.addEventListener("click", clearTextfield);

	

	// Show panel

	showPanelAll.addEventListener('click', drawAllElem)
    showPanelComplt.addEventListener('click', drawCompleted)

    showPanelSearch.addEventListener('keyup', function (e) {
		if (e.key === "Enter") {
            searchElems()
			clearTextfield();
        }
	})


	// ToDo panel

	let timeNow = Date.now();
	let day = new Date(timeNow);
	let options = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	};

	const deleteTodo = function (key) {
		arrTodo = arrTodo.filter((item) => item.id != key);
	};

	const deleteTodoItem = function () {
		let parentItem = this.closest(".todo-panel__item");
		let idTemplate = parentItem.id;
		let parentItemId = parseInt(idTemplate.match(/\d+/));
		parentItem.remove();

		deleteTodo(parentItemId);
		countAll();
		countComplt();
        updateStorage('todoData', arrTodo)
	};

	function deleteLast() {
		let allId = arrTodo.map((item) => item.id);
		let maxId = Math.max(...allId);
		let removedItem = document.getElementById(`item-${maxId}`);
		removedItem.remove();

		deleteTodo(maxId);
		countAll();
		countComplt();
        updateStorage('todoData', arrTodo)
	}

    function changeStatus(event) {
        let    target = event.target;
			
				let status = document.getElementById(`${target.parentNode.parentNode.id}`);
                let clickParent = target.parentNode;
                let clickTarget = clickParent.firstChild;
                let itemId = status.id;
                let numId = parseInt(itemId.match(/\d+/))
                if (clickTarget.checked === false) {
                    clickTarget.checked = true;

                } else {
                    clickTarget.checked = false;
                }
                arrTodo = arrTodo.map((elem) => {

                    if (elem.id === numId) {
                        elem.status = clickTarget.checked;
    
                    }
                    return elem
                })
				status.classList.toggle("completed");
                
			
			countComplt();
            updateStorage('todoData', arrTodo)
            
		};

	function addTodo() {
		let todoValue = actionPanelTextfield.value;
		let allId = arrTodo.map((item) => item.id);
		let maxId = Math.max(...allId, 0);
		if (!todoValue.trim()) {
			alert("Enter what you want ToDo!");
			return;
		}

		let product = {
			id: maxId + 1,
			name: todoValue,
			date: new Intl.DateTimeFormat("ru-RU", options).format(day),
			status: false,
		};

		createTodoItem(product);
		arrTodo.push(product);
        updateStorage('todoData', arrTodo);
		countAll();
		countComplt();
	}

	const createTodoItem = function ({id, name, date, status}) {
		let todoPanelItem = document.createElement("div");
		todoPanelItem.classList.add("todo-panel__item");
		todoPanelItem.id = `item-${id}`;
        

		let todoPanelItemCustomCheckBox = document.createElement("lable");
		todoPanelItemCustomCheckBox.classList.add("todo-panel__item_customCheckBox");
		todoPanelItemCustomCheckBox.addEventListener('click', changeStatus)

		let todoPanelItemStatus = document.createElement("input");
		todoPanelItemStatus.setAttribute("type", "checkbox");
		todoPanelItemStatus.classList.add("todo-panel__item_status");
		todoPanelItemStatus.checked = status;
        

		let span = document.createElement("span");

		let todoPanelItemTxt = document.createElement("div");
		todoPanelItemTxt.classList.add("todo-panel__item-txt");
		todoPanelItemTxt.innerHTML = `${name}`;

		let todoPanelItemSide = document.createElement("div");
		todoPanelItemSide.classList.add("todo-panel__item_side");

		let todoPanelItemDel = document.createElement("button");
		todoPanelItemDel.classList.add("todo-panel__item_del", "btn");
		todoPanelItemDel.addEventListener("click", deleteTodoItem);

		let todoPanelItemDate = document.createElement("div");
		todoPanelItemDate.classList.add("todo-panel__item_date");
		todoPanelItemDate.innerHTML = `${date}`;

        if (todoPanelItemStatus.checked === true) {
            todoPanelItem.classList.add('completed')
        }

		todoPanelItemCustomCheckBox.append(todoPanelItemStatus, span);
		todoPanelItemSide.append(todoPanelItemDel, todoPanelItemDate);
		todoPanelItem.append(
			todoPanelItemCustomCheckBox,
			todoPanelItemTxt,
			todoPanelItemSide
		);
		todoPanel.append(todoPanelItem);
	};

	arrTodo.forEach((item) => createTodoItem(item));
	

	// append items
    actionPanelCreatrToDo.append(actionPanelTextfield, actionPanelAdd);
	actionPanel.append(actionPanelDltAll, actionPanelDlt, actionPanelCreatrToDo);

    showPanel.append(
		showPanelCount,
		showPanelCountComplt,
		showPanelAll,
		showPanelComplt,
		showPanelSearch
	);
	root.append(header, actionPanel, showPanel, todoPanel);
}
