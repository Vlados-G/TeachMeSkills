


function getStorage(key) {
    return localStorage.getItem(key)
}

function updateStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

function clearStorage(key) {
    localStorage.removeItem(key)
}

export {getStorage, updateStorage, clearStorage}