import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFA from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './index.scss';

class Row extends Component {
    render() {
        return (
            <li className="row">
                <button className="button button-check">
                    <IconFA icon={["fas", "check"]} />
                </button>
                <span>{this.props.item.message}</span>
                <div className="settings">
                    <Link to={`/edit/${this.props.item.id}`} className="button button-edit">
                        <IconFA icon={["fas", "pencil-alt"]} />
                    </Link>
                    <button className="button button-remove">
                        <IconFA icon={["far", "trash-alt"]} />
                    </button>
                </div>
            </li>
        );
    }
}

Row.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Row;
