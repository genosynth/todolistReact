import * as Icon from 'react-bootstrap-icons';

function Todo({todo,status}) {
  return <div className="container">
        <h2>{todo.name}
        
        <button className="btn btn " onClick={()=>{
            status(todo.name)
            console.log(todo.checked)}}>
            <Icon.Circle></Icon.Circle>
        </button>
        
        <button className="btn btn ">
                <Icon.Trash></Icon.Trash></button>
            </h2>
        <span>{todo.notes}</span>  
        <span> - Date Added - {todo.dateAdded}</span>
    </div>
 
}

export default Todo;
