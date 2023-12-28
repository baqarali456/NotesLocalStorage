let notes = JSON.parse(localStorage.getItem("notes")) || [];
let addNotesContainer = document.querySelector('.addNotes-container');
let input = document.getElementById('input');
let index = -1;

function renders(){
  addNotesContainer.innerHTML = "";
  notes.forEach(note=>{
    let div = document.createElement('div');
   div.classList.add('notes');
   div.innerHTML = `${note.text} <i onclick="ondelete(${note.id})" id="delete" class="fa-solid fa-trash"></i>`;
   addNotesContainer.appendChild(div);
  }) 
}
renders()


input.addEventListener('keypress',(e)=>{
  if(e.key === "Enter"){
    index++;
   notes.push({id:index,text:input.value});
   renders()
   
  localStorage.setItem("notes",JSON.stringify(notes));
  input.value = "";
  }
})


function ondelete(i){
  notes = notes.filter(note=>note.id !== i);
  localStorage.setItem("notes",JSON.stringify(notes))
}









