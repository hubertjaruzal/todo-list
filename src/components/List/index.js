import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fontawesome from '@fortawesome/fontawesome'
import fontawesomeFAS from '@fortawesome/fontawesome-free-solid';
import fontawesomeFAR from '@fortawesome/fontawesome-free-regular';

import Row from './Row';

import './index.scss';

fontawesome.library.add(fontawesomeFAS, fontawesomeFAR);

class List extends Component {
    render() {
        return (
            <ul className="list">
                {
                    this.props.todoList.map((item, index) => (
                        <Row item={item} key={index} />
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
