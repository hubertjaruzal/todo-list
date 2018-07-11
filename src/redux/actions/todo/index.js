export function addItem(data, history) {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_ITEM',
            data: { id: (getState().todo.list.length + 1), message: data }
        });
        history.push('/');
    }
}
