
let addNotesContainer = document.querySelector('.addNotes-container');
let input = document.getElementById('input');
let str = "";


const ondelete =(i) =>{
  let notedata = JSON.parse(localStorage.getItem("notes"));
   notedata = notedata.filter(note=>note != i);
   localStorage.setItem("notes",JSON.stringify(notedata))
   showNotes()
} 

const onEdit = (i) =>{
  input.value = i;
  console.log(input.value);
  let edit = true;
  
  let notedata = JSON.parse(localStorage.getItem("notes"));
  let finduserInput = notedata.find(note=>note === input.value);
  if(edit){
    input.addEventListener('keypress',(e)=>{
      if(e.key === "e" || e.key === "E"){
        notedata = JSON.parse(localStorage.getItem("notes"));
        if(input.value){
          notedata.splice(finduserInput,1,input.value)

          localStorage.setItem("notes",JSON.stringify(notedata));
           showNotes()
        }
        
      }
      input.value;
    })
    
  }
  

}

const showNotes = () =>{
  let notesdata = JSON.parse(localStorage.getItem("notes"));
  
  if(notesdata){
    addNotesContainer.innerHTML = "";
  notesdata.forEach(note=>{
    str = `<p class="notes">${note}<i onclick="ondelete('${note}')" class="fa-solid fa-delete-left"></i><i onclick="onEdit('${note}')" class="fa-solid fa-pen"></i></p>`;
    addNotesContainer.innerHTML += str;
  });
  
}
 else{
  addNotesContainer.innerHTML = "<p class='notes'>No Notes here</p>";
 }
  
}
showNotes()


input.addEventListener('keypress',(e)=>{
  if(e.key == "Enter"){
    let notes = localStorage.getItem("notes");
    if(notes == null){
      let json = [];
      json.push(input.value);
      localStorage.setItem("notes",JSON.stringify(json))
    }
    else{
      let json = JSON.parse(localStorage.getItem("notes"));
      json.push(input.value);
      localStorage.setItem("notes",JSON.stringify(json))
    }
    showNotes()
    input.value = "";
    
  }
});









