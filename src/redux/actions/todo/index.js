function generateID(list) {
    if(list.length) {
        return (list[list.length - 1].id + 1);
    }
    return 1;
}

export function addItem(data, history) {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_ITEM',
            data: { id: generateID(getState().todo.list), message: data }
        });
        history.push('/');
    }
}

export function removeItem(id) {
    return (dispatch, getState) => dispatch({ type: 'REMOVE_ITEM', data: id });
}
