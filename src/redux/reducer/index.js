const INITIAL_STATE = {
    data: {},
}
    
function reducer(state = INITIAL_STATE, action) {
    if( action.type === 'SEARCH_REDDIT'){
        return ({
            ...state,
            ...action.payload,
        });
    }
    return state;
}
    
export default reducer;