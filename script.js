  let list = document.querySelector("#list");
  let task = document.querySelector("#task");
  let alreadycreated = document.getElementsByTagName("li"); 

  let close = document.createElement("span"); 
  close.textContent = "\u274C"; 
  close.classList.add("close");
  close.onclick = removeButton;
  alreadycreated[0].append(close); 
  alreadycreated[0].onclick = checked; 

  function checked(){
    this.classList.toggle("checked"); 
  }

  function removeButton(){
    this.parentElement.remove(); 
  }

  function newElement() {

    if (task.value == "")  {  
      $('#liveToast2').toast('show');
    } else {
      $('#liveToast1').toast('show');

      let newLi = document.createElement('li') 
      list.appendChild(newLi); 
      newLi.textContent = task.value; 
      newLi.onclick = checked;   

      let close = document.createElement("span");
      close.textContent = "\u274C";
      close.classList.add("close");
      close.onclick = removeButton;
      newLi.append(close);
    }
  }    
