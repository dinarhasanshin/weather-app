import { TodosDataType, TodosType } from '../types/types'
import { db } from './api'



export const todoAPI = {
    // getTodo: () => {
    //     return db.TodosPath.get()
    //     .then((doc: any) => { return doc.data().userLibrary  })
    //     .catch(() => { return 'Error' })
    // },
    addTodo: (id: string, data: TodosDataType) => {
        return db.TodosCollections.doc(id).set(data)
        .then(() => { return 'Success'  })
        .catch(() => { return 'Error' })
    },
    updateTodo: (id: string, text: string, isChecked: boolean) => {
        return db.TodosCollections.doc(id).update({text: text, isChecked: isChecked})
        .then(() => { return 'Success'  })
        .catch(() => { return 'Error' })
    },
    // deleteTodo: (id: string, text: string, isChecked: boolean) => {
    //     return db.TodosPath.update({ userLibrary: db.TodoAddArray.arrayRemove({ id, text, isChecked }) })
    //     .then(() => { return 'Success' })
    //     .catch(() => { return 'Error' })
    // },
    deleteTodo: (id: string) => {
        return db.TodosCollections.doc(id).delete()
        .then(() => { return 'Success'  })
        .catch(() => { return 'Error' })
    },
    getTodo: () => {
        const dataArray: Array<TodosType> | any = []
        return db.TodosCollections.get()
        .then((querySnapshot: any) => { 
            querySnapshot.forEach((item: any)  => {
                console.log(item.id, item.data());
                dataArray.push({id: item.id, data:  item.data() })
            });
            return dataArray
         })
        .catch(()=> { return 'Error' })
        
        // dispatch(actionsReducer.setTodos(dataArray))
    } 
}

