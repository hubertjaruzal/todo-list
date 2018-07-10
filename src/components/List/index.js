import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconFA from '@fortawesome/react-fontawesome';

import Row from './Row';

import './index.scss';

class List extends Component {
    render() {
        return (
            <div>
                <ul className="list">
                    {
                        this.props.todoList.map((item, index) => (
                            <Row item={item} key={index} />
                        ))
                    }
                </ul>
                <button className="add-button">
                    <IconFA icon={["fas", "plus"]} />
                </button>
            </div>
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
