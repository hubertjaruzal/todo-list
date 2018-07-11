const initialState = {
    list: [],
};

const todo = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_ITEM':
        return {
            ...state,
            list: state.list.concat(action.data),
        };
    case 'REMOVE_ITEM':
        return {
            ...state,
            list: state.list.filter(item => item.id !== action.data),
        };
    default:
        return state;
    }
};

export default todo;
