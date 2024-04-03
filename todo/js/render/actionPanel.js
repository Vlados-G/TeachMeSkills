let actionPanel = document.createElement('div');
actionPanel.classList.add('action-panel');

let actionPanelDltAll = document.createElement('button');
actionPanelDltAll.textContent = 'Delete all';
actionPanelDltAll.classList.add(`action-panel__dltAll`, 'btn');
let actionPanelDlt = document.createElement('button');
actionPanelDlt.textContent = 'Delete last';
actionPanelDlt.classList.add('action-panel__dlt', 'btn');

let actionPanelCreatrToDo = document.createElement('div');
actionPanelCreatrToDo.classList.add('action-panel__createToDo');

let actionPanelTextfield = document.createElement('input')
actionPanelTextfield.classList.add('action-panel__textfield');
actionPanelTextfield.setAttribute('type','text');
actionPanelTextfield.setAttribute('placeholder', 'Enter todo...');
actionPanelTextfield.id = "product";

let actionPanelAdd = document.createElement('button');
actionPanelAdd.textContent = 'Add';
actionPanelAdd.classList.add('action-panel__add', 'btn');

export {actionPanel, actionPanelDltAll, actionPanelDlt, actionPanelCreatrToDo, actionPanelTextfield, actionPanelAdd}