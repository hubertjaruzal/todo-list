import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Row from './Row';

import './index.scss';

class List extends Component {
    render() {
        return (
            <ul className="list">
                {
                    this.props.todoList.map(item => (
                        <Row item={item} />
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
