import Todo from './Todo'

function TodoList({todos , status}) {
  return(
   
     todos.map(todo => {
            return <Todo key={todo.name} todo={todo} status={status}/>
        })
 

    
  )
}

export default TodoList;
