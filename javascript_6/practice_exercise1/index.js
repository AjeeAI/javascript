let noteid = document.getElementById("note");
let saveid = document.getElementById("save");
let loadid = document.getElementById("load");
let writeid = document.getElementById("write");
// let noteField = document.getElementById("note-area-div");
let loadedNote = document.getElementById("loadedNote");
saveid.addEventListener("click", function(){
    let note = noteid.value.trim();
    if (note !== "") {
        
        localStorage.setItem("note", JSON.stringify(note));
        // alert("Note added successfully!");

    }
})

loadid.addEventListener("click", function(){
    gotNote = localStorage.getItem("note")
    noteid.style.display = "none";
    saveid.style.display = "none";
    writeid.style.display = "flex";
    loadedNote.textContent = gotNote;
    loadedNote.style.fontWeight = "bold";
    // noteField = document.createElement()
    // alert(gotNote);
})

writeid.addEventListener("click", function(){
    // noteField.textContent = "";
    loadedNote.textContent = "";
    noteid.style.display = "flex";
    // alert("button is working!")
})