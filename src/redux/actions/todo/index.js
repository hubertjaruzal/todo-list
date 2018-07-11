function generateID(list) {
    if(list.length) {
        return (list[list.length - 1].id + 1);
    }
    return 1;
}

export function setItems() {
    return (dispatch, getState) => {
        if(window.localStorage && window.localStorage.react_todo_list_items) {
            dispatch({
                type: 'SET_ITEMS',
                data: JSON.parse(window.localStorage.react_todo_list_items)
            });
        }
    }
}

function saveDataInLocalStorage() {
    return (dispatch, getState) => {
        if(window.localStorage) {
            window.localStorage.setItem('react_todo_list_items', JSON.stringify(getState().todo.list));
        }
        return;
    }
}

export function addItem(data, history) {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_ITEM',
            data: { id: generateID(getState().todo.list), message: data.message, done: data.done }
        });
        history.push('/');
        dispatch(saveDataInLocalStorage());
    }
}

function updateItem(data) {
    return dispatch => {
        dispatch({ type: 'UPDATE_ITEM', data });
        dispatch(saveDataInLocalStorage());
    }
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
    return (dispatch, getState) => {
        dispatch({ type: 'REMOVE_ITEM', data: id });
        dispatch(saveDataInLocalStorage());
    }
}
