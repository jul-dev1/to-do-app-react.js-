const Todo = ({todos,clickHadler, onDelete}) => {
    return (
        <div className='items' >
           <h1 className='item' onClick={()=>clickHadler(todos.id)} style={todos.completed?{color:'green',textDecorationLine: 'line-through'}:{color:''}}>{todos.text}</h1>
           <p className="complete" onClick={()=>clickHadler(todos.id)}>✔</p>
           <p className="delete" onClick={()=>onDelete(todos.id)}>❌</p>
        </div>
    )
}

export default Todo
