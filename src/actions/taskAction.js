const setTaskList = (task_list) => {
    return {
        type: "SET_TASK_LIST",
        payload: task_list
    }
}

const addTask = (task, task_list) => {
    task_list.push(task);
    return {
        type: "ADD_TASK",
        payload: task_list
    }
}

const getTaskList = () => {
    return {
        type: "GET_TASK_LIST",
    }
}

const exportDefault = {
    getTaskList,
    setTaskList,
    addTask
}

export default exportDefault