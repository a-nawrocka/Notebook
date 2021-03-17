
  var notebook = new Notebook;
  let n = new Notebook()

  var formElement = document.getElementById("create-note");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    var note = document.getElementById("note-area").value
    notebook.create(note)
  } )

  

