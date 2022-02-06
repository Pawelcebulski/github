// create links to needed elements
const list = document.getElementById('list')
const inputItems = document.getElementById('input-items');
const listItems = document.getElementsByTagName('li')

function addNewItem() {

    const amountOflistItems = getAmountOfItems()
    const newId = `${amountOflistItems + 1}`;

    const newEl = document.createElement('li');
    newEl.setAttribute('id', newId );

    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox')
    newEl.appendChild(newCheckbox)

    const itemTitle = document.createElement('p')
    itemTitle.innerHTML = inputItems.value
    inputItems.value = ''
    newEl.appendChild(itemTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.addEventListener('click', deleteObj)
    newEl.appendChild(deleteBtn);




    list.appendChild(newEl);
}

function getAmountOfItems() {
    return listItems.length
}


function checkObj(event) {
    const element = document.getElementById(event.target.id);
    element.classList.toggle('checked')
}

function deleteObj(event) {
    const element = document.getElementById(event.path[1].id);
    list.removeChild(element);
}


