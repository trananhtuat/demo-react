import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList(props) {
    return (
        <div className="tasklist">
        {
            console.log(props.task_list)
        }
            <ul>
            {
                props.task_list.map((task, index) => (
                    <li key={index}>
                        <TaskItem task={task}/>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
