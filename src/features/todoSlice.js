import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the first state
const initialState = {
    todos: [{
        id: nanoid(),
        task: "newTask",
        isDone: false,
    }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // 1. Add new Todo ( push )
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);
        },

        // 2. Delete Todo( filter )
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id != action.payload
            )
        },

        // 3. Mark as Done( map )
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                  return{...todo, isDone: true}  
                }
            });
        },
    }
});


// request toolkit to form actions
export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;

// export the reducers
export default todoSlice.reducer;










