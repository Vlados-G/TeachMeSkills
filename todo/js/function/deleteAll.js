

import { todoPanel } from "../render/todoPanel.js";
import { arrTodo } from "../app.js";
import { getStorage, clearStorage, updateStorage } from "./storage.js";
import { countAll, countComplt } from "./count.js";


function deleteAll() {
		arrTodo.length = 0;
		todoPanel.innerHTML = "";
        clearStorage('todoData');
		countAll();
		countComplt();
	}

    export { deleteAll }