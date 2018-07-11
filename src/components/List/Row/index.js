import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconFA from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { removeItem, toggleComplete } from '../../../redux/actions/todo';

import './index.scss';

class Row extends Component {
    render() {
        return (
            <div>
                {
                    !this.props.item.hidden &&
                    <li className="row">
                        <button
                            onClick={() => this.props.toggleComplete(this.props.item)}
                            className={`button button-check ${this.props.item.complete ? 'button-check--complete' : 'button-check--incomplete'}`}
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
                }
            </div>
        );
    }
}

Row.propTypes = {
    item: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
    removeItem,
    toggleComplete,
}, dispatch);

export default connect(null, mapDispatchToProps)(Row);
