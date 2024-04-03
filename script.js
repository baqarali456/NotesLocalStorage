let addNotesContainer = document.querySelector(".addNotes-container");
let input = document.getElementById("input");
let edit = false;
let index;

let notes = JSON.parse(localStorage.getItem('notes')) || [];

if(notes){
  showNotes()
}

function setLocalStorage(){
  localStorage.setItem('notes',JSON.stringify(notes));
}

input.addEventListener('keypress',addNotes);

let idofNotes = 0;

function addNotes(e){
  if(e.key === "Enter"){
    if(edit){
     notes.splice(index,1,{...notes[index],text:input.value})
    }
    else{
      notes.push({id:idofNotes++,text:input.value});
    }
    input.value = "";
    setLocalStorage()
   showNotes();
  }
  
}

function showNotes(){
  if(notes.length > 0){
    addNotesContainer.innerHTML = "";
    notes.forEach(note=>{
      addNotesContainer.innerHTML += `<p class="notes">${note.text}<i onclick="ondelete(${note.id})" class="fa-solid fa-delete-left"></i><i onclick="onEdit(${note.id})" class="fa-solid fa-pen"></i></p>`
    });
  }
 
}


const ondelete = (id) =>{
  notes = notes.filter(note=>note.id !== id)
  setLocalStorage()
  showNotes()
}

const onEdit = (id) =>{ 
 index = notes.findIndex(note=>note.id === id);
 input.value = notes[index].text
 edit = true;
 
}


