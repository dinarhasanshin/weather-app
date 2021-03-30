import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { TodosType } from '../../types/types'
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import { addTodos, deleteTodos, getTodos } from '../../redux/todo_reducer'
import s from './TodoPage.module.css'
import uniqId from 'uniqid'
import { TodoItem } from './TodoItem/TodoItem'

export const TodoPage = () => {


    const dispatch = useDispatch()
    const todos_reducer: Array<TodosType> = useSelector((state: AppStateType) => state.todo_reducer.todos_data)

    // const GetTodos = () => {
    //     dispatch(getTodos())
    // }
    // const AddTodos = () => {
    //     dispatch(addTodos("Хлеб 13", false))
    // }
    const deleteTodoItem = (id: string, text: string, isChecked: boolean) => {
        dispatch(deleteTodos(id, text, isChecked))
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [])


    let todosMap: Array<TodosType | any> = todos_reducer.map((todo: TodosType) => 
    <TodoItem id={todo.id} text={todo.text} isChecked={todo.isChecked} deleteTodoItem={deleteTodoItem}/>) 

    type MyFormValuesType = {
        text: string
    }
    const initialValues: MyFormValuesType = { text: ''}

    const onSubmitFormik = (values: FormikValues, actions: FormikHelpers<MyFormValuesType>) => {
        dispatch(addTodos(uniqId(),  values.text))
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
                        <button type="submit" disabled={isSubmitting}>Add Todo</button>
                    </Form>
                )}
            </Formik>
            {
                todosMap
            }
        </div>
    )
}