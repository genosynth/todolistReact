import Todo from './Todo'
import * as Icon from 'react-bootstrap-icons';

function TodoList({todos , status, deleteTodo, editTodo, applyTodo}) {

  if(todos.length===0){    
    return <div className='empty'>
      <div>You currently have nothing on your mind! </div>
      <Icon.EmojiSmile></Icon.EmojiSmile>
      </div>
  }

  return(
   
     todos.map(todo => {

            return <Todo key={todo.name} todo={todo} status={status} deleteTodo={deleteTodo} editTodo={editTodo} applyTodo={applyTodo}/>                      

        })    
  )
}

export default TodoList;
