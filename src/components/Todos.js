import { useState, useEffect} from "react";
import ToDoList from './ToDoList'



const Todos = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        getFromLocal()
    },[]);

    useEffect(()=>{
        saveToLocal()
    },[todos]);

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Empty Input')
            return;
        }
        // console.log(text)
        setTodos([...todos, { id: Math.floor(Math.random() * (1 + 5000) + 2), text: text, completed: false }])

        setText("")
    }
    const saveToLocal=()=>{
        localStorage.setItem('myData',JSON.stringify(todos))
    };

    


    const getFromLocal=()=>{
        if(localStorage.getItem('myData')===null){
            localStorage.setItem('myData',JSON.stringify([]))
        }else{
            const local= JSON.parse( localStorage.getItem('myData'))
            console.log('data:', local) 
            setTodos(local)

        }
    }

    const clickHadler = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo=>
            todo.id!==id
        ))
        console.log('delete',id)
    }

    return (
        <div>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control'>
                    <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <input type='submit' value='Add' className='btn btn-block' />

                < ToDoList todos={todos} clickHadler={clickHadler} onDelete={onDelete} />

            </form>
        </div>
    )
}

export default Todos
