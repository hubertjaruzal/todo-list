import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../index.js';
import { addItem } from '../../../redux/actions/todo';

class FormAdd extends Component {
    render() {
        return (
            <Form
                handleOnClick={(data) => this.props.addItem(data, this.props.history)}
                buttonText="Add Item"
            />
        );
    }
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
