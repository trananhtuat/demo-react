import React, { useState, useEffect } from 'react'
import 'boxicons'

import {useSelector, useDispatch} from 'react-redux'

import taskAction from '../actions/taskAction'



export default function TaskAddForm() {

    const taskReducer = useSelector(state => state.taskReducer)

    const dispatch = useDispatch()

    const [task_content, setTaskContent] = useState("")

    const [task_list, setTaskList] = useState()

    useEffect(() => {
        dispatch(taskAction.getTaskList())
        setTaskList(taskReducer.task_list)
    }, [dispatch, taskReducer.task_list])

    const addTask = () => {
        if (task_content.trim().length === 0) return
        const task = {
            task_content: task_content,
            status: 'pending',
            created_time: '20210613'
        }
        dispatch(taskAction.addTask(task, task_list))
        setTaskContent('')
    }

    return (
        <div className="taskform">
            <button onClick={() => addTask()}>
                <box-icon color="#fff" name='plus-medical'></box-icon>
            </button>
            <input type="text" placeholder="Add a task" value={task_content} onChange={(e) => setTaskContent(e.target.value)} onKeyUp={e => {
                if (e.key === "Enter") addTask()
            }}/>
        </div>
    )
}
