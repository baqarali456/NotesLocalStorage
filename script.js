let addNotesContainer = document.querySelector(".addNotes-container");
let input = document.getElementById("input");
let str = "";
let edit = false;
let index;

let notes = JSON.parse(localStorage.getItem("notes")) || [];
showLists() // execute for curren values in  notes


  input.addEventListener('keypress',(e)=>{
    if(e.key == "Enter"){
      if(edit){
        edit = false;
       let finddata = input.value;
        notes.splice(index,1,finddata);
        localStorage.setItem("notes",JSON.stringify(notes));
     showLists();
     input.value = "";

      }
      else{
        notes.push(input.value);
        localStorage.setItem("notes",JSON.stringify(notes));
        showLists();
        input.value = "";
      }
    }
  })



function showLists(){
  str = "";
  if(notes.length > 0){
    notes.forEach(note=>{
      str += `<p class="notes">${note}<i onclick="ondelete('${note}')" class="fa-solid fa-delete-left"></i><i onclick="onEdit('${note}')" class="fa-solid fa-pen"></i></p>`;
    });
    addNotesContainer.innerHTML = str;
  }
  else{
    addNotesContainer.innerHTML = "Please Add notes";
  }
}



const ondelete = (item) =>{
  notes = notes.filter(note=>note != item);
  localStorage.setItem("notes",JSON.stringify(notes));
  showLists();
}


const onEdit = (item) =>{
  edit = true;
   index = notes.findIndex(note=>note == item);
  input.value = notes[index];
}