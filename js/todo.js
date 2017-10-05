
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

 

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var clearDoneButton = document.getElementById('clear-d-button');
  clearDoneButton.addEventListener('click', clearDone, false);

  var clearAllButton = document.getElementById('clear-all-button');
  clearAllButton.addEventListener('click', clearAll, false);

  

  function addToDoItem() {
  	//Obtener dato del formulario
    var taskToDo = document.getElementById('myInput').value;
    //Apuntar a la lista en la que se va a meter el elemento obtenido
    var toDoList = document.getElementById('mylist');
    //Crear nuevo elemento para meterlo en la lista
    var li = document.createElement("li");
    //rellenar elemento a meter en lista
    li.append(taskToDo);
    //meter elemento relleno en lista
    toDoList.append(li);
    document.getElementById('myInput').value='';
  }

  function markAsDone() {
  	//Obtener datos mylist
  	var toDoList = document.getElementById('mylist');
  	var taskDone = toDoList.querySelector('li');
  	//Añadir los datos mylistdone
  	var doneList = document.getElementById('mylistdone');
  	doneList.append(taskDone);
  }  

 function clearDone() {
 	//Esta funcion debe limpiar las tareas incluidas en la lista de tareas hechas
 	var doneList = document.getElementById('mylistdone');
 	doneList.innerHTML = '<lh>Cosas Hechas</lh>';

 	//console.log('mylistdone');
 }

  function clearAll() {
 	//Esta funcion debe limpiar todas las listas
 
 	var clearAllList = document.getElementById('mylist');
 	clearAllList.innerHTML = '<lh>Cosas por Hacer:</lh>';
 	var doneList = document.getElementById('mylistdone');
 	doneList.innerHTML = '<lh>Cosas Hechas</lh>';
 }

}






// window.onload = function() {
//   //init();
//   //ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN

//   var saveButton = document.getElementById('add-button');
//   saveButton.addEventListener('click', addToDoItem, false);

//   //OTRAS ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN 
 
//   //doSomethingElse();
//   // LAS FUNCIONES DE AÑADIR BORRAR .....
//   function addToDoItem() {
//     //LO QUE SEA
//     console.log("ADD BUTTON CLICKED!");
//   }

//   function markAsDone() {
//     //LO QUE SEA
//     console.log("DONE BUTTON CLICKED!");
//   }
//  };




