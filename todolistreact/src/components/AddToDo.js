import React, { useRef }from 'react'

function AddToDo({add}) {

  const nameRef=useRef();
  const notesRef=useRef();
 


  return <div className="todo">
    <input ref={nameRef} type="text" placeholder="Enter task name"></input>
    <input ref ={notesRef} type="text" placeholder="Enter notes or describtion"></input>
    <button className="btn btn btn-primary" onClick={()=>{
       const name = nameRef.current.value 
       const notes =notesRef.current.value
      add(name,notes)
      nameRef.current.value=null
      notesRef.current.value=null
      }}>Add Task</button>
  </div>;
}

export default AddToDo;
