import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare, { ThunkAction } from 'redux-thunk'
import todo_reducer from "./todo_reducer";



let rootReducer = combineReducers({
    todo_reducer: todo_reducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType <A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store