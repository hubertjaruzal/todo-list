import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../index.js';
import { updateMessage } from '../../../redux/actions/todo';

class FormEdit extends Component {
    getItem() {
        return this.props.todoList.find(item => item.id === Number(this.props.match.params.id));
    }

    render() {
        return (
            <Form
                item={this.getItem()}
                handleOnClick={(data) => this.props.updateMessage(data, this.props.history)}
                buttonText="Edit Item"
            />
        );
    }
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
