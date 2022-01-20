let todoList = new Array();
let idNo = 1 ;

// function to create array of objects
    function addTodo()
    {
      let textV = document.getElementById("id0").value;
      console.log(textV.length);
      if ( textV.length <= 0)     //// checking if user wrote something down
        {
          document.getElementById("id0").setAttribute('placeholder', 'You need to write something' );
        }
        else 
        {
            let name = "id"+idNo;  // setting name for sorting purposes
            todoList.push({ objectName : name, objectText : textV, checked : false  } )

            document.getElementById("id0").value="";
            document.getElementById("id0").setAttribute('placeholder', 'Write what you need to do') ;
            //console.log(todoList[idNo]);            // both methods will create error
            //console.log(todoList[idNo].objectText)  // on first action (checking if array text value is`t set to "" )
          
            idNo++;
        }
    }

////////////////////// array operations /////////////////////////////////
//////////////---------------------CLEAR LIST---------------------/////////////////   
function clearList()
    {
      let tab = document.querySelector('ol')
      if (todoList.length > 0 )
      {
          tab.innerHTML='';
          tab.innerText='';
      }
    }
//////////////---------------------PRINT ARRAY---------------------/////////////////   
   
    function printArray()
    {                
      todoList.sort(function(a,b) {return a.checked-b.checked});       
        console.clear(); 

          for(let i = 0; i < todoList.length ; i++)
        {
          let newEl = document.createElement('li');
          newEl.setAttribute('id', "id"+(i+1));  
          ////////////////////////////changing class of an object and checkbox value based on a bool var. in array////////////////////////////////
      
          let checkboxValue =" " ;   
          if (todoList[i].checked == false)
                    {
                    newEl.className = 'todo';
                    checkboxValue =" " ;}
          else
                    {
                    newEl.className = 'done';
                    checkboxValue ="checked" ;}
          

          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
           
          newEl.innerHTML ='<input type="checkbox" id=id' + (i+1) + 'ch  '+checkboxValue+' onclick="changeValue('+i+')">';  // adding checkbox 
                                                                           
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          newEl.innerHTML += '<input type="text" class="tekstArea" id="'+(i+1)+'" placeholder="Write what you need to do" value="'+todoList[i].objectText+'" />';
          newEl.innerHTML +='<input type="submit" class="deleteButton" value="delete" onclick="deleteObj('+i+')" >' ;
         
         
          var position = document.getElementsByTagName('ol')[0];
          position.appendChild(newEl);


          console.log(todoList[i]);              //// error checking
          console.log(todoList[i].objectText) ;  ////
      }
    }
//////////////---------------------CHANGE BOOOL VALUE ---------------------/////////////////   
function changeValue(i)
    {
        if (todoList[i].checked == true)
        {
            todoList[i].checked = false;
        }
        else if (todoList[i].checked == false)
        {
          todoList[i].checked = true;  
        }
        clearList();
        printArray();
    }
//////////////---------------------DELETE OBJECT---------------------/////////////////   
function deleteObj(i)
  {
  todoList.splice(i,1);
        //////////////// DOES NOT DELETE LAST OBJECT WITHOUT THIS 
        if(todoList.length == 0)
        { 
        let tab = document.querySelector('ol')
        tab.innerHTML='';
        tab.innerText='';
        }
        ///////////////////////////////////////////////////////////
  clearList();
  printArray();
}