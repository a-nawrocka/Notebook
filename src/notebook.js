class Notebook {
  constructor(){
    this.notes = []
  }

  create(note){
  this.notes.push(note)
  }

	preview(notesIndex){
		return notesIndex.substring(0, 20)
	}
}
