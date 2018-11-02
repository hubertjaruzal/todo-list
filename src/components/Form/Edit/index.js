import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../index.js';
import { updateMessage } from '../../../redux/actions/todo';

const FormEdit = (props) => {
    const getItem = () => {
        return props.todoList.find(item => item.id === Number(props.match.params.id));
    }

    return (
        <Form
            item={getItem()}
            handleOnClick={(data) => props.updateMessage(data, props.history)}
            headerText="Edit Item"
        />
    );
}

FormEdit.propTypes = {
    todoList: PropTypes.array.isRequired,
    updateMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todoList: state.todo.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
