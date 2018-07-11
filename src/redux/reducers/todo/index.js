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
    case 'UPDATE_ITEM':
        const itemIndex = state.list.findIndex(item => item.id === action.data.id);

        return {
            ...state,
            list: state.list.map((item, index) => {
                if(index !== itemIndex) {
                    return item;
                }
                return {
                    ...item,
                    ...action.data
                }
            })
        };
    case 'REMOVE_ITEM':
        return {
            ...state,
            list: state.list.filter(item => item.id !== action.data),
        };
    case 'SET_ITEMS':
        return {
            ...state,
            list: action.data,
        };
    default:
        return state;
    }
};

export default todo;
