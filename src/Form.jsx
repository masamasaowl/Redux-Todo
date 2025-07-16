import { useState } from "react"
import { useDispatch } from "react-redux";
import {addTodo} from './features/todoSlice'

export default function Form(){
    let [input, setInput] = useState("");

    // use Dispatch to send action to reducer
    const dispatch = useDispatch();

    let handleInputChange = (evt) => {
        setInput(evt.target.value)
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();

        // dispatch action.payload
        dispatch(addTodo(input));
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter task" value={input} onChange={handleInputChange}/>
            
        </form>
    )
}