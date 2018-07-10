import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Row extends Component {
    render() {
        return (
            <li className="row">
                <button className="button button-check"/>
                <span>{this.props.item}</span>
                <div className="settings">
                    <button className="button button-edit"/>
                    <button className="button button-remove"/>
                </div>
            </li>
        );
    }
}

Row.propTypes = {
    item: PropTypes.string.isRequired,
};

export default Row;
