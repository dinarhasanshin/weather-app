import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { TodosType } from '../../types/types'
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import { actionsReducer, addTodos, getTodos } from '../../redux/todo_reducer'
import { todoAPI } from '../../api/todo_api'
import s from './TodoPage.module.css'

export const TodoPage = () => {


    const dispatch = useDispatch()
    const todos_reducer: Array<TodosType> = useSelector((state: AppStateType) => state.todo_reducer.todos_data)

    // const GetTodos = () => {
    //     dispatch(getTodos())
    // }
    // const AddTodos = () => {
    //     dispatch(addTodos("Хлеб 13", false))
    // }

    useEffect(() => {
        dispatch(getTodos())
    }, [])


    let todosMap: Array<TodosType | any> = todos_reducer.map((todo: TodosType) => <div className={ todo.isChecked ? s.lined : '' }> { todo.text } <input type="checkbox" checked={todo.isChecked}/> </div>) 

    type MyFormValuesType = {
        text: string,
        isChecked: boolean
    }
    const initialValues: MyFormValuesType = { text: '', isChecked: false}

    const onSubmitFormik = (values: FormikValues, actions: FormikHelpers<MyFormValuesType>) => {
        console.log(values.text, values.isChecked);
        dispatch(addTodos(values.text, values.isChecked))
        values.text = ''
        values.isChecked = false
        actions.setSubmitting(false)
        
        
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    onSubmitFormik(values, actions)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="text" placeholder="Write your todo item!" />
                        <Field type="checkbox" name="isChecked"/>
                        <button type="submit" disabled={isSubmitting}>Find</button>
                    </Form>
                )}
            </Formik>
            {
                todosMap
            }
            {/* <button onClick={() => { GetTodos() }}>Get</button> */}
            {/* <button onClick={() => { AddTodos() }}>Add</button> */}
        </div>
    )
}