import Todo from './Todo'

function TodoList({todos , status, deleteTodo}) {
  return(
   
     todos.map(todo => {
            return <Todo key={todo.name} todo={todo} status={status} deleteTodo={deleteTodo}/>
        })
 

    
  )
}

export default TodoList;
