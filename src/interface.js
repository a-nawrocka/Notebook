
  var notebook = new Notebook;
  let n = new Notebook()

  var formElement = document.getElementById("create-note");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    var note = document.getElementById("note-area").value
    notebook.create(note)
  } )

	var noteList = document.getElementById("note-list");
	noteList.innerHTML = '<li> This is a note! </li>'
	// array is notebook.notes
	// iterate through notebook.notes to print each note
	// each note is printed inside <li> note </li>

  

