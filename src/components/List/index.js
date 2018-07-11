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
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        this.filterList(this.state.show);
    }

    componentDidUpdate(prevProps) {
        if(!_isEqual(this.props.todoList, prevProps.todoList)) {
            this.filterList(this.state.show);
        }
    }

    setList(todoList, show) {
        this.setState({
            todoList,
            show
        });
    }

    filterList(type) {
        if(type === 'complete') {
            this.setList(
                this.props.todoList.map(item => {
                    if(item.message.includes(this.inputRef.current.value) && item.complete) {
                        return { ...item, hidden: false };
                    }
                    return { ...item, hidden: true };
                }),
                'complete'
            );
        } else if(type === 'incomplete') {
            this.setList(
                this.props.todoList.map(item => {
                    if(item.message.includes(this.inputRef.current.value) && !item.complete) {
                        return { ...item, hidden: false };
                    }
                    return { ...item, hidden: true };
                }),
                'incomplete'
            );
        } else {
            this.setList(
                this.props.todoList.map(item => {
                    if(item.message.includes(this.inputRef.current.value)) {
                        return { ...item, hidden: false };
                    }
                    return { ...item, hidden: true };
                }),
                'all'
            );
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
                    <input ref={this.inputRef} onChange={() => this.filterList(this.state.show)} placeholder="Search..." />
                    <div className="radio-buttons-container">
                        <label
                            className={`radio-button ${this.state.show === 'all' ? 'radio-button-active' : null}`}
                            htmlFor="all"
                        >
                            <input
                                type="radio"
                                id="all"
                                checked={this.state.show === 'all'}
                                onChange={() => this.filterList('all')}
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
                                onChange={() => this.filterList('complete')}
                            />
                            <span>Complete</span>
                        </label>
                        <label
                            className={`radio-button ${this.state.show === 'incomplete' ? 'radio-button-active' : null}`}
                            htmlFor="incomplete"
                        >
                            <input
                                type="radio"
                                id="incomplete"
                                checked={this.state.show === 'incomplete'}
                                onChange={() => this.filterList('incomplete')}
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
                                                            <Row item={item} key={item.id} />
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
