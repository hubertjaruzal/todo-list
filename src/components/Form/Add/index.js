import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../index.js';

class FormAdd extends Component {
    render() {
        return (
            <Form />
        );
    }
}

FormAdd.propTypes = {
    todoList: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    todoList: state.todo.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
