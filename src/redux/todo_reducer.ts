import { todoAPI } from "../api/todo_api"
import { TodosType } from "../types/types"
import { BaseThunkType, InferActionsType } from "./redux-store"





let initialState = {
    todos_data: [] as Array<TodosType>
}

type InitialState = typeof initialState

const todo_reducer = (state = initialState, action: ActionTypes ): InitialState => {

    switch(action.type){
        case 'SET_TODOS':
            return {...state, todos_data: action.payload}

        case 'ADD_TODOS':
            return {...state, todos_data: [...state.todos_data, action.payload]}
        default:
            return state
    }
}


type ActionTypes = InferActionsType<typeof actionsReducer>


export const actionsReducer = {
    setTodos: (payload: Array<TodosType>) => ({ type: 'SET_TODOS', payload } as const),
    addTodos: (payload: TodosType) => ({ type: 'ADD_TODOS', payload } as const)
}


type ThunkActionTypes = BaseThunkType<ActionTypes>

export const getTodos = (): ThunkActionTypes => async (dispatch) => {
    let data = await todoAPI.getTodo()
    dispatch(actionsReducer.setTodos(data))
}
// export const setTodos = (payload: TodosType): ThunkActionTypes => async (dispatch) => {
//     let data = await todoAPI.setTodo(payload)
//     debugger
//     // dispatch(actionsReducer.setTodos(data))
// }
export const addTodos = (text: string, isChecked: boolean): ThunkActionTypes => async (dispatch) => {
    let data = await todoAPI.addTodo(text, isChecked)
    if(data === 'Success'){
        dispatch(actionsReducer.addTodos({text, isChecked}))
    }
    
}

export default todo_reducer