var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  var notebook = new Notebook;
  notebook.create("this is the first note");
  console.log(notebook.notes);
  console.log(notebook);
  /* Do things after DOM has fully loaded */ 

  
});