
  var notebook = new Notebook;
  let n = new Notebook()
  notebook.create("Hello this is working now!")
  notebook.create("Guten tag Ani and Anna!")

  var formElement = document.getElementById("create-note");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    var note = document.getElementById("note-area").value
    notebook.create(note)
  } )

  var notelist = document.getElementById("note-list");
  let html = "";
  for (let i = 0; i < notebook.notes.length; i++) {
    html += `<p>${notebook.notes[i]}</p>`;
  }
  notelist.innerHTML = html;

//  let html = "";
//  for (let i = 0; i < noteList.length; i++) {
//      html += `<p>${noteList[i]}</p>`;
//  }
//  div.innerHTML = html;
// }


	// array is notebook.notes
	// iterate through notebook.notes to print each note
	// each note is printed inside <li> note </li>
