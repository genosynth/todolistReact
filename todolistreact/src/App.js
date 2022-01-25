import React, { useState , useRef, useEffect }from 'react'
import './App.css';
import TodoList from './components/TodoList';
import AddToDo from './components/AddToDo';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function toDoObject(name,notes,checked=false){ //Class of todo Object
  let dateAdded = new Date();
  let dd = String(dateAdded.getDate()).padStart(2, '0');
  let mm = String(dateAdded.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = dateAdded.getFullYear();
  dateAdded = dd + '/' + mm + '/' + yyyy;

return {name,notes,checked, dateAdded}
}

function App() {

  
  let obj1= toDoObject("Gym","Arms & Abs",false)
  let obj2= toDoObject("Coding","React",false)
  
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
   setTodos(prevTodos => [...prevTodos, toDoObject(name,notes,false)]) 
   
  }

  const deleteTodo= (name) =>{
   
    if(window.confirm("You sure you want to delete this task?")===false) return
    const remove = todos.filter((todo)=>{
      if (todo.name!==name)
      return todo
    })
    //console.log(name)
    setTodos(remove)

  }

  return (
    <div>
      <Header></Header>
      <TodoList todos={todos} status={setStatus} deleteTodo={deleteTodo}></TodoList>
      <AddToDo add={addTodo}></AddToDo>
     
 
    </div>
  );
}


export default App;
