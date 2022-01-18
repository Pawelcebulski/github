function checkObj(idA)

{

    
    let sty = document.getElementById(idA);


        if (sty.className =='todo')
        {
            sty.className ='done';
                      

        }
      else
        {
            sty.className ='todo';
          
        }



}