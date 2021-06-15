import React, {useEffect} from 'react'
import TaskList from '../components/TaskList'
import TaskAddForm from '../components/TaskAddForm'

import {useSelector, useDispatch} from 'react-redux'

import taskAction from '../actions/taskAction'

const demo_task_list = [
    {
        task_content: 'Lorem ipsum dolor',
        status: 'pending',
        created_time: '20210614'
    },
    {
        task_content: 'Lorem ipsum dolor agut',
        status: 'pending',
        created_time: '20210613'
    }
];

export default function HomePage() {

    const taskReducer = useSelector(state => state.taskReducer)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(taskAction.setTaskList(demo_task_list))
    }, [dispatch])

    return (
        taskReducer.task_list ? 
        (
            <div className="main">
                <div className="taskform-wrapper">
                    <TaskAddForm/>
                </div>
                <div className="tasklist-wrapper">
                    <TaskList task_list={taskReducer.task_list}/>
                </div>
            </div>
        ) : null
    )
}
