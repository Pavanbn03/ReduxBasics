const initialstate={
    result:[],
}

const reducer =(state=initialstate,action)=>{
    switch(action.type){
        case 'STORE':
            return{
                ...state,
                result: state.result.concat({value:action.count,id: new Date()})
            }
        case 'DELETE':
            const newArray = state.result.filter(ele=> ele.id!==action.liid)
            return{
                ...state,
                result:newArray
            }
        default: return state;
    }
}
export default reducer;