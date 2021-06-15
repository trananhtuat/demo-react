import React from 'react'

export default function TaskItem(props) {
    return (
        <div className="taskitem">
            <button></button>
            <div className="content">
                <p>
                    {props.task.task_content}
                </p>
            </div>
        </div>
    )
}
