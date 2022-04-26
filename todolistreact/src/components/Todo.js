import * as Icon from 'react-bootstrap-icons';
import React, { useRef }from 'react'

function Todo({todo,status,deleteTodo, editTodo, applyTodo}) {
   let css = {fontStyle: "italic"} 

   let styling = {background:"white"}
   let stylingEdit = {background:"white", padding:"1%" }

   if (todo.checked===true){
     styling ={background: "rgb(174, 251, 174)"}
     stylingEdit ={background: "rgb(174, 251, 174)", padding:"1%" }
   }

   const nameRef=useRef();
    const notesRef=useRef();

   if(todo.edit===true){
    
   
       return <div className='container' style={stylingEdit}>
           <h2><input ref={nameRef} placeholder={todo.name}></input>
                <button className="btn btn" onClick={()=>{
                    status(todo.name)
                    //console.log(todo.checked)
                    }}>

                    {todo.checked===false ? <Icon.Circle></Icon.Circle> : <Icon.CheckCircleFill></Icon.CheckCircleFill>}            
                
                </button>
                <button className="btn btn " onClick={()=>{deleteTodo(todo.name)}}>
                        <Icon.Trash></Icon.Trash>
                </button>

                <button className="btn btn " onClick={()=>{
                    let name = nameRef.current.value 
                    let notes =notesRef.current.value
                    if (name===""){name=todo.name}
                    if (notes===""){notes=todo.notes}

                    let dateEdited = new Date();
                    let hour = dateEdited.getHours();
                    let minutes = dateEdited.getMinutes(); 
              
                    if (minutes<10){minutes="0"+minutes}           

                    let dd = String(dateEdited.getDate()).padStart(2, '0');
                    let mm = String(dateEdited.getMonth() + 1).padStart(2, '0'); //January is 0!
                    let yyyy = dateEdited.getFullYear();
                    dateEdited = dd + '/' + mm + '/' + yyyy + ' - ' + hour + ":" + minutes;

                    applyTodo(name,notes, todo.name, dateEdited)
                    }}>
                        <Icon.ExplicitFill></Icon.ExplicitFill>
                </button>
           </h2>
           <input placeholder={todo.notes} ref={notesRef} ></input>
           <span style={css}> - Date Added - {todo.dateAdded}</span>
           <span style={css}> {todo.editHistory[todo.editHistory.length-1]}</span>
       </div>
   }

  return <div className="container"  style={styling}>
        <h2>{todo.name}
        
            <button className="btn btn" onClick={()=>{
                status(todo.name)
                //console.log(todo.checked)
                }}>

                {todo.checked===false ? <Icon.Circle></Icon.Circle> : <Icon.CheckCircleFill></Icon.CheckCircleFill>}            
               
            </button>
            

            <button className="btn btn " onClick={()=>{deleteTodo(todo.name)}}>
                    <Icon.Trash></Icon.Trash>
            </button>

            <button className="btn btn " onClick={()=>{editTodo(todo.name)}}>
                    <Icon.Explicit></Icon.Explicit>
            </button>
        </h2>
        <span>{todo.notes}</span>  
        <span style={css}> - Date Added - {todo.dateAdded}</span>
        <span style={css}> {todo.editHistory[todo.editHistory.length-1]}</span>
        
    </div>
 
}

export default Todo;
