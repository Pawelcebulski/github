
function dodaj()

{
// Create a new element and store it in a variable.

var newEl = document.createElement('li');

// find element by id and clone it

var newText = document.getElementById('tekstArea');
var val = newText.cloneNode(true);

// attach the new text node to the new element.
newEl.appendChild(val);

// find the position where the new element should be added.
var position = document.getElementsByTagName('ol')[0];

// Insert the new element into its position.
position.appendChild(newEl);

}