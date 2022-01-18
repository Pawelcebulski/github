var idNr=1 ; 

function dodaj()

{
// creating inner variable just for function purposes 
  var newId = idNr;
// Create a new element and store it in a variable.

var newEl = document.createElement('li');
newEl.className ='todo';
newEl.setAttribute('id', "id"+newId );                       //seting id 
newEl.innerHTML +='<input type="checkbox" onclick="checkObj(\'id'+ newId +'\')" id=id' + newId + 'ch>' ;  // adding checkbox 
newEl.innerHTML +='<input type="submit" class="deleteButton" value="delete" onclick="deleteObj(\'id'+ newId +'\')" >' ;
idNr++; // id iteration

// find element by id and clone it

var newText = document.getElementById('id0');
var val = newText.cloneNode(true);

// setting value of text input to null 
document.getElementById('id0').value="";



// attach the new text node to the new element.
newEl.appendChild(val);

// find the position where the new element should be added.
var position = document.getElementsByTagName('ol')[0];

// Insert the new element into its position.
position.appendChild(newEl);

//}
console.log ("newId " + newId); 
console.log ("id " + idNr); 

}


console.log ("oryginal id " + idNr); 


