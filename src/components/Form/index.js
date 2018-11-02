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

        this.inputRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setItem(this.props.item);
        this.inputRef.current.focus();
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
            <form className="form-container">
                <h1>{this.props.headerText}</h1>
                <input ref={this.inputRef} value={this.state.item.message} onChange={this.handleChange} />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.handleOnClick(this.state.item);
                    }}
                >
                    Submit
                </button>
                <Link to="/" className="nav-button">
                    <IconFA icon={["fas", "arrow-left"]} />
                </Link>
            </form>
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
    headerText: PropTypes.string.isRequired,
    item: PropTypes.object,
};

export default Form;
