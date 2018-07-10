import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todoList.map(item => (
                        <div>{item}</div>
                    ))
                }
            </ul>
        );
    }
}

List.propTypes = {
    todoList: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    todoList: state.todo.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
