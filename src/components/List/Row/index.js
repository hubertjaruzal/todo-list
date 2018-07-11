import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconFA from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { removeItem, toggleDone } from '../../../redux/actions/todo';

import './index.scss';

class Row extends Component {
    render() {
        return (
            <li className="row">
                <button
                    onClick={() => this.props.toggleDone(this.props.item)}
                    className={`button button-check ${this.props.item.done ? 'button-check--done' : 'button-check--undone'}`}
                >
                    <IconFA icon={["fas", "check"]} />
                </button>
                <span>{this.props.item.message}</span>
                <div className="settings">
                    <Link to={`/edit/${this.props.item.id}`} className="button button-edit">
                        <IconFA icon={["fas", "pencil-alt"]} />
                    </Link>
                    <button onClick={() => this.props.removeItem(this.props.item.id)} className="button button-remove">
                        <IconFA icon={["far", "trash-alt"]} />
                    </button>
                </div>
            </li>
        );
    }
}

Row.propTypes = {
    item: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
    removeItem,
    toggleDone,
}, dispatch);

export default connect(null, mapDispatchToProps)(Row);
