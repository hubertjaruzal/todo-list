import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconFA from '@fortawesome/react-fontawesome';
import _isEqual from 'lodash/isEqual';

import './index.scss';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {
                id: null,
                message: '',
                complete: false,
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.setItem = this.setItem.bind(this);
    }

    componentDidMount() {
        this.setItem(this.props.item);
    }

    componentDidUpdate(prevProps) {
        if(!_isEqual(this.props.item, prevProps.item)) {
            this.setItem(this.props.item);
        }
    }

    setItem(item) {
        this.setState({ item });
    }

    handleChange(e) {
        this.setState({ item: { id: this.state.item.id, message: e.target.value, complete: this.state.item.complete } });
    }

    render() {
        return (
            <div className="form-container">
                <input value={this.state.item.message} onChange={this.handleChange} />
                <button
                    onClick={() => this.props.handleOnClick(this.state.item)}
                >
                    {this.props.buttonText}
                </button>
                <Link to="/" className="nav-button">
                    <IconFA icon={["fas", "arrow-left"]} />
                </Link>
            </div>
        );
    }
}

Form.defaultProps = {
    item: {
        id: null,
        message: '',
        complete: false,
    }
};

Form.propTypes = {
    buttonText: PropTypes.string.isRequired,
    item: PropTypes.object,
};

export default Form;
