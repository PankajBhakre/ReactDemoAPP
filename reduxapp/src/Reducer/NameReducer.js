import userData from "../InitialData/InitialData"
const nameReducer = (state=userData, action) => {
    switch(action.type){

        case 'NAME':{
            state = {
                ...state,
                name:action.payLoad,
            }
        }
    }
    return state
}

export default nameReducer