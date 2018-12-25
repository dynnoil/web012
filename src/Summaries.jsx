import React from 'react';
import PropTypes from 'prop-types';

import { Record } from './types.js';

export class SummaryActive extends React.PureComponent {

    static propTypes = {
        records: PropTypes.arrayOf(Record)
    }

    static defaultProps = {
        records: []
    }

    render() {
        return (
            <div>Active Users: {this.props.records.filter(record => record.active).length}</div>
        );
    }
}

export class SummaryUsers extends React.PureComponent {

    static propTypes = {
        records: PropTypes.arrayOf(Record)
    }

    static defaultProps = {
        records: []
    }

    render() {
        return (
            <div>Users Count: {this.props.records.length}</div>
        );
    }
}
