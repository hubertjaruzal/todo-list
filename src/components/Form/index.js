import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconFA from '@fortawesome/react-fontawesome';

import './index.scss';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
    }

    render() {
        return (
            <div className="form-container">
                <input value={this.state.message} onChange={this.handleChange} />
                <button onClick={() => this.props.handleOnClick(this.state.message)}>Add item</button>
                <Link to="/" className="nav-button">
                    <IconFA icon={["fas", "arrow-left"]} />
                </Link>
            </div>
        );
    }
}

Form.propTypes = {
    todoList: PropTypes.array.isRequired,
};

export default Form;
