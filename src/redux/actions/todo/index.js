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
            data: { id: generateID(getState().todo.list), message: data.message, done: data.done }
        });
        history.push('/');
    }
}

function updateItem(data) {
    return { type: 'UPDATE_ITEM', data }
}

export function updateMessage(data, history) {
    return dispatch => {
        dispatch(updateItem(data));
        history.push('/');
    }
}

export function toggleDone(data) {
    return dispatch => {
        dispatch(updateItem({ id: data.id, message: data.message, done: !data.done }));
    }
}

export function removeItem(id) {
    return (dispatch, getState) => dispatch({ type: 'REMOVE_ITEM', data: id });
}
