import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconFA from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import _isEqual from 'lodash/isEqual';

import Row from './Row';

import './index.scss';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        }

        this.setList = this.setList.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    componentDidMount() {
        this.setList(this.props.todoList);
    }

    componentDidUpdate(prevProps) {
        if(!_isEqual(this.props.todoList, prevProps.todoList)) {
            this.setList(this.props.todoList);
        }
    }

    setList(todoList) {
        this.setState({ todoList });
    }

    filterList(e) {
        this.setList(this.props.todoList.filter(item => item.message.includes(e.target.value)));
    }

    render() {
        return (
            <div className="list-container">
                <div className="list-settings">
                    <input onChange={this.filterList} placeholder="Search..." />
                </div>
                <ul className="list">
                    {
                        this.state.todoList.map((item, index) => (
                            <Row item={item} key={index} />
                        ))
                    }
                </ul>
                <Link to="/add" className="nav-button">
                    <IconFA icon={["fas", "plus"]} />
                </Link>
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
