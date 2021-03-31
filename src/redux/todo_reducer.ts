import { todoAPI } from "../api/todo_api"
import { TodosType } from "../types/types"
import { BaseThunkType, InferActionsType } from "./redux-store"





let initialState = {
    todos_data: [] as Array<TodosType>
}

type InitialState = typeof initialState

const todo_reducer = (state = initialState, action: ActionTypes): InitialState => {

    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                todos_data: action.payload
            }

        case 'ADD_TODOS':
            return {
                ...state,
                todos_data: [...state.todos_data, action.payload]
            }

        case 'DELETE_TODOS':
            return {
                ...state,
                todos_data: state.todos_data.filter((todo: TodosType) => todo.id !== action.payload)
            }

        default:
            return state
    }
}


type ActionTypes = InferActionsType<typeof actionsReducer>


export const actionsReducer = {
    setTodos: (payload: Array<TodosType>) => ({ type: 'SET_TODOS', payload } as const),
    addTodos: (payload: TodosType) => ({ type: 'ADD_TODOS', payload } as const),
    deleteTodos: (payload: string) => ({ type: 'DELETE_TODOS', payload } as const)
}


type ThunkActionTypes = BaseThunkType<ActionTypes>

export const getTodos = (): ThunkActionTypes => async (dispatch) => {
    let data = await todoAPI.getTodo()
    if (data.length !== 0) {
        dispatch(actionsReducer.setTodos(data))
    }
}
// export const setTodos = (payload: TodosType): ThunkActionTypes => async (dispatch) => {
//     let data = await todoAPI.setTodo(payload)
//     if (data === 'Success') {
//         getTodos()
//     }
// }
export const addTodos = (id: string, text: string, isChecked: boolean = false): ThunkActionTypes => async (dispatch) => {
    let data = await todoAPI.addTodo(id, {text, isChecked})
    if (data === 'Success') {
        // dispatch(actionsReducer.addTodos({ id, data: { text, isChecked } }))
        dispatch(getTodos())
    }
}

export const updateTodos = (id: string, text: string, isChecked: boolean = false): ThunkActionTypes => async (dispatch) => {
    let data = await todoAPI.updateTodo(id, text, isChecked)
    if (data === 'Success') {
        dispatch(getTodos())
    }
}

export const deleteTodos = (id: string): ThunkActionTypes => async (dispatch) => {

    let data = await todoAPI.deleteTodo(id)
    if (data === 'Success') {
        dispatch(actionsReducer.deleteTodos(id))
    }
}

export default todo_reducer