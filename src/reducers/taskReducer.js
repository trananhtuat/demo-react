const taskReducer = (state = {}, action) => {
    switch(action.type){
        case "SET_TASK_LIST":
            return {
                ...state,
                task_list: action.payload,
            }
        case "ADD_TASK":
            return {
                ...state,
                task_list: action.payload,
            }
        case "GET_TASK_LIST":
            return state
        default:
            return state
    }
}

export default taskReducer;