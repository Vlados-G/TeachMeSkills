import { arrTodo } from "../app.js";
import { showPanel, showPanelCount, showPanelCountComplt, showPanelAll,	showPanelComplt, showPanelSearch } from "../render/showPanel.js";
import { getStorage, updateStorage, clearStorage } from "./storage.js";



function countAll() {
		showPanelCount.innerHTML = `All: ${arrTodo.length}`;
		console.log(arrTodo.length);
	}

function countComplt() {
		showPanelCountComplt.innerHTML = `Complete: ${arrTodo.reduce((count, item) => (item.status ? ++count : count),0)}`;
            
	}
	

    export {countAll, countComplt }