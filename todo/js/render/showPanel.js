let showPanel = document.createElement('div');
showPanel.classList.add('show-panel');

let showPanelCount = document.createElement('div');
showPanelCount.innerHTML = `All: ${0}`;
showPanelCount.classList.add('show-panel__count');

let showPanelCountComplt = document.createElement('div');
showPanelCountComplt.innerHTML = `Complete: ${0}`;
showPanelCountComplt.classList.add('show-panel__count_complt');

let showPanelAll = document.createElement('button');
showPanelAll.textContent = 'Show all';
showPanelAll.classList.add('show-panel__all', 'btn');


let showPanelComplt = document.createElement('button');
showPanelComplt.textContent = 'Completed';
showPanelComplt.classList.add('show-panel__complt', 'btn');

let showPanelSearch = document.createElement('input');
showPanelSearch.classList.add('show-panel__search');
showPanelSearch.setAttribute('type','search');
showPanelSearch.setAttribute('placeholder', 'Search...');

export {showPanel, showPanelCount, showPanelCountComplt, showPanelAll, showPanelComplt, showPanelSearch}