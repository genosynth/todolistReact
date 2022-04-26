import React, { useState ,useEffect }from 'react'
import './App.css';
import TodoList from './components/TodoList';
import AddToDo from './components/AddToDo';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function toDoObject(name,notes,checked=false, edit=false, editHistory=[]){ //Class of todo Object
  let dateAdded = new Date();
  let dd = String(dateAdded.getDate()).padStart(2, '0');
  let mm = String(dateAdded.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = dateAdded.getFullYear();
  dateAdded = dd + '/' + mm + '/' + yyyy;

return {name,notes,checked, dateAdded, edit, editHistory}
}

function App() {  

  
  const [todos, setTodos] = useState(()=> {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  
  function setStatus(id) { // used to change check from true to false or vice versa
    const changeStatus = todos.filter((todo) =>{
      //return todo.checked=true;
      if (todo.checked===false){
        todo.name===id ? todo.checked=true : console.log()
        return todo
      }
      if (todo.checked===true){todo.name===id ? todo.checked=false : console.log()}
      return todo
    })

    setTodos(changeStatus)
  }
  const addTodo = (nameRef,notesRef) => {
    const name = nameRef
    const notes = notesRef
    if (name ==="") return
    const checkSameName = todos.filter((todo) => {
        if(todo.name===name){return todo}
        
    });

    if (checkSameName.length>0){return window.alert("Task with same name already exists!")}
   
   setTodos(prevTodos => [...prevTodos, toDoObject(name,notes)]) 
   
  }

  const deleteTodo = (name) =>{
   
    if(window.confirm("You sure you want to delete this task?")===false) return
    const remove = todos.filter((todo)=>{
      if (todo.name!==name)
      return todo
    })
    //console.log(name)
    setTodos(remove)

  }

  const editTodo = (name) =>{
    const edit = todos.filter((todo)=>{
      if (todo.name===name){todo.edit=true}
      return todo
    })

    setTodos(edit)
  }

  const applyTodo = (name,notes, oldName, dateEdited) => {

    for (let i=0; i<todos.length; i++){
      if (todos[i].name===name){ 
        const toExit =todos.filter((todo) => {
          if(todo.name===oldName){
            todo.edit=false 
            if(todo.notes!==notes){ todo.editHistory.push(" - Edited On " + dateEdited)} 
            todo.notes=notes
          }
          return todo
        })

        setTodos(toExit)
        return window.alert("It appears that you already have a task with the same name!")
      }
    }

    const apply = todos.filter((todo) =>{
      if (todo.name===oldName){
        todo.name=name
        todo.notes=notes
        todo.edit=false
        todo.editHistory.push(" - Edited On " + dateEdited)
        //console.log(todo)
      }
      return todo
    })

    setTodos(apply)

  }


  return (
    <div>
      <Header></Header>
      <TodoList  todos={todos} status={setStatus} deleteTodo={deleteTodo} editTodo={editTodo} applyTodo={applyTodo}></TodoList>
      <AddToDo add={addTodo}></AddToDo>
     
 
    </div>
  );
}


export default App;
