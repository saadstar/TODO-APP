import React from "react";
import { Add } from "./Actions";
import { Delete } from "./Actions";

const initialState = {
    todos:[],
}
function Reducer(state=initialState,action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default: return    state
    }
}
export default Reducer;