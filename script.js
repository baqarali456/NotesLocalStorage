
const addNotesContainer = document.querySelector('.addNotes-container');
const input = document.getElementById('input');

addNotesContainer.innerHTML = JSON.parse(localStorage.getItem("notes"));
let addnotes = [];

input.addEventListener('keypress',(e)=>{
  if(e.key === "Enter"){
      let div = document.createElement('div');
      div.classList.add('notes');
      div.innerHTML = `${input.value} <i id="deletebtn" class="fa-solid fa-trash"></i>`;
      addNotesContainer.appendChild(div);
      input.value = " ";
      let notes = localStorage.getItem("notes");
      if(notes == null){
       addnotes.push(addNotesContainer.innerHTML);
       localStorage.setItem("notes",JSON.stringify(addnotes))
      }
      else{
        addnotes.push(addNotesContainer.innerHTML);
       localStorage.setItem("notes",JSON.stringify(addnotes))
      }
      
      
    }
})

const notesLists = document.querySelectorAll('.notes')
notesLists.forEach(noteslist=>{
    noteslist.addEventListener('click',(e)=>{
if(e.target.classList.contains('fa-solid')){
   noteslist.remove()
}
    })
})




