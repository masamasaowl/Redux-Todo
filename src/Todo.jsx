import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "./features/todoSlice";
import { markAsDone } from "./features/todoSlice";


export default function Todo(){
    const todos = useSelector((state) => state.todos);

    // Dispatch action 
    let dispatch = useDispatch();

    let handleDelete = (id) =>{
        dispatch(deleteTodo(id));
    }

    let handleMarkAsDone = (id) => {
        dispatch(markAsDone(id));
    }

    return(
        <div className="">
            <p>Todo</p>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id}>
                    <li className= {`${todo.isDone && "bg-lime-400"}`}>
                        {todo.task}
                        
                    </li>
                    <button onClick={() => handleDelete(todo.id) } className="bg-red-400 ">Delete
                    </button>

                    <button className="bg-yellow-300" onClick={() => handleMarkAsDone(todo.id)}>
                        Mark as Done
                    </button>
                    
                    </div>  
                    
                ))}
            </ul>
        </div>
    )
}