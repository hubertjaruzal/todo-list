import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
    render() {
        return (
            <div>
                {this.props.item}
            </div>
        );
    }
}

Row.propTypes = {
    item: PropTypes.string.isRequired,
};

export default Row;
