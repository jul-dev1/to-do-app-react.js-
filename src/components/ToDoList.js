import Todo from "./Todo"



const ToDoList = ({todos, clickHadler, onDelete}) => {
    return (
        <div>
            {todos.map((todo)=>{
                return(
                    <div key={todo.id}> <Todo todos={todo} clickHadler={clickHadler} onDelete={onDelete} /> </div>
                ) })}
        </div>
    )
}

export default ToDoList
