import * as Icon from 'react-bootstrap-icons';

function Todo({todo,status,deleteTodo}) {
   let css = {fontStyle: "italic"} 

   let styling = {background:"white"}
   if (todo.checked===true){
     styling ={background: "rgb(174, 251, 174)"}
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
        </h2>
        <span>{todo.notes}</span>  
        <span style={css}> - Date Added - {todo.dateAdded}</span>
    </div>
 
}

export default Todo;
