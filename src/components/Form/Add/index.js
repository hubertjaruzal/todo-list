import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../index.js';
import { addItem } from '../../../redux/actions/todo';

const FormAdd = (props) => {
    return (
        <Form
            handleOnClick={(data) => props.addItem(data, props.history)}
            headerText="Add Item"
        />
    );
}

FormAdd.propTypes = {
    todoList: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todoList: state.todo.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
