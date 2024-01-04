const initialState = {
    data:[],
    serverErrors:[]
}

const blogReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GET_ALL_BLOGS':{
            return {...state,data:action.payload}
        }
        case 'ADD_BLOG':{
            return {...state,data:[...state.data,action.payload]}
        }
        case 'REMOVE_BLOG':{
            return {...state,data:state.data.filter(ele =>{
                return ele._id !== action.payload
            })}
        }
        case 'SERVER_ERRORS':{
            return {...state,serverErrors:action.payload}
        }
        case 'EDIT_BLOG':{
            return {...state,data:state.data.map(ele =>{
                if(ele._id === action.payload._id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }
        default:{
            return {...state}
        }
    }
}

export default blogReducer