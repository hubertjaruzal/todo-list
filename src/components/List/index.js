import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconFA from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import _isEqual from 'lodash/isEqual';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { setItems } from '../../redux/actions/todo';
import Row from './Row';

import './index.scss';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            show: 'all',
        }

        this.inputRef = React.createRef();

        this.setList = this.setList.bind(this);
        this.filterList = this.filterList.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
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

    handleShow(type) {
        let todoList = [];
        if(type === 'complete') {
            todoList = this.props.todoList.filter(item => item.complete)
        } else if(type === 'incomplete') {
            todoList = this.props.todoList.filter(item => !item.complete)
        } else {
            todoList = this.props.todoList
        }

        if(this.inputRef.current.value) {
            this.setState({
                show: type,
                todoList: todoList.filter(item => item.message.includes(this.inputRef.current.value))
            });
        } else {
            this.setState({
                show: type,
                todoList
            });
        }
    }

    reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const items = this.reorder(
            this.state.todoList,
            result.source.index,
            result.destination.index
        );

        this.props.setItems(items);
    }

    render() {
        return (
            <div className="list-container">
                <div className="list-settings">
                    <input ref={this.inputRef} onChange={this.filterList} placeholder="Search..." />
                    <div className="radio-buttons-container">
                        <label
                            className={`radio-button ${this.state.show === 'all' ? 'radio-button-active' : null}`}
                            htmlFor="all"
                        >
                            <input
                                type="radio"
                                id="all"
                                checked={this.state.show === 'all'}
                                onChange={() => this.handleShow('all')}
                            />
                            <span>All</span>
                        </label>
                        <label
                            className={`radio-button ${this.state.show === 'complete' ? 'radio-button-active' : null}`}
                            htmlFor="complete"
                        >
                            <input
                                type="radio"
                                id="complete"
                                checked={this.state.show === 'complete'}
                                onChange={() => this.handleShow('complete')}
                            />
                            <span>complete</span>
                        </label>
                        <label
                            className={`radio-button ${this.state.show === 'incomplete' ? 'radio-button-active' : null}`}
                            htmlFor="incomplete"
                        >
                            <input
                                type="radio"
                                id="incomplete"
                                checked={this.state.show === 'incomplete'}
                                onChange={() => this.handleShow('incomplete')}
                            />
                            <span>Incomplete</span>
                        </label>


                    </div>
                </div>

                    <ul className="list">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef}>
                                        {
                                            this.state.todoList.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                          ref={provided.innerRef}
                                                          {...provided.draggableProps}
                                                          {...provided.dragHandleProps}
                                                        >
                                                          <Row item={item} key={index} />
                                                        </div>
                                                    )}
                                                </Draggable>

                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
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
    setItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todoList: state.todo.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
