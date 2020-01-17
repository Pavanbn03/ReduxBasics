const initialstate={
    counter:0
}

const reducer =(state=initialstate,action)=>{
    switch(action.type){
        case 'INC':
            return{
                ...state,
                counter:state.counter+1
            }

        case 'DEC':
            return{
                ...state,
                counter:state.counter-1
            }

        case 'ADD':
        return{
            ...state,
            counter:state.counter+action.value
        }
        case 'SUB':
        return{
            ...state,
            counter:state.counter-action.value
        }
        default: return state;
    }
}
export default reducer;