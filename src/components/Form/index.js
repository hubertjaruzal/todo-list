import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconFA from '@fortawesome/react-fontawesome';

class Form extends Component {
    render() {
        return (
            <div>
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
