import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFA from '@fortawesome/react-fontawesome';

import './index.scss';

class Row extends Component {
    render() {
        return (
            <li className="row">
                <button className="button button-check">
                    <IconFA icon={["fas", "check"]} />
                </button>
                <span>{this.props.item}</span>
                <div className="settings">
                    <button className="button button-edit">
                        <IconFA icon={["fas", "pencil-alt"]} />
                    </button>
                    <button className="button button-remove">
                        <IconFA icon={["far", "trash-alt"]} />
                    </button>
                </div>
            </li>
        );
    }
}

Row.propTypes = {
    item: PropTypes.string.isRequired,
};

export default Row;
