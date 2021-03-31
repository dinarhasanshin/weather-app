import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { TodosType } from '../../types/types'
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import { actionsReducer, updateTodos, deleteTodos, getTodos, addTodos } from '../../redux/todo_reducer'
import s from './TodoPage.module.css'
import uniqId from 'uniqid'
import { TodoItem } from './TodoItem/TodoItem'
import { todoAPI } from '../../api/todo_api'
import { db } from '../../api/api'

export const TodoPage = () => {


    const dispatch = useDispatch()
    const todos_reducer: Array<TodosType> = useSelector((state: AppStateType) => state.todo_reducer.todos_data)


    const deleteTodoItem = (id: string) => {
        dispatch(deleteTodos(id))
    }
    const onChangeChecked = (id: string, text: string, isChecked: boolean) => {
        dispatch(updateTodos(id, text, isChecked))
    }


    let todosMap: Array<TodosType | any> = todos_reducer.map((todo: TodosType) =>
    <TodoItem key={todo.id} id={todo.id} text={todo.data.text} isChecked={todo.data.isChecked} deleteTodoItem={deleteTodoItem} onChangeChecked={onChangeChecked}/>) 

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
                todos_reducer.length !== 0 ? todosMap : 'Заметок пока нет!'
            }
        </div>
    )
}