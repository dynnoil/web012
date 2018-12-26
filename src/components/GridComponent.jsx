import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { GridRecord } from './GridRecord.jsx';
import { Filter } from './Filter.jsx';

export class GridComponent extends React.PureComponent {

    static propTypes = {
        records: PropTypes.array
    }

    static defaultProps = {
        records: []
    }

    constructor() {
        super();
        this.filterRef = React.createRef();
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.filterRef.current.focus();
    }

    toggleActive(index) {
        const { dispatch } = this.props;
        dispatch({
            type: 'TOGGLE_ACTIVE',
            index: index
        });
    }

    handleFilterChange(event) {
        const value = event.target.value;
        const { dispatch } = this.props;
        dispatch({
            type: 'SET_FILTER',
            filter: value
        });
    }

    render() {
        return (
            <div>
                <Filter ref={this.filterRef} onFilterChange={this.handleFilterChange} />
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.records
                            .filter(record => record.firstName.toUpperCase().includes(this.props.filter.toUpperCase()))
                            .map((record, index) =>
                                <GridRecord
                                    {...record}
                                    key={record.id}
                                    history={this.props.history}
                                    toggleActive={this.toggleActive.bind(this, index)} />
                            )}
                    </tbody>
                </table>
                {this.props.children && React.cloneElement(this.props.children, { records: this.props.records })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    records: state.grid.records,
    filter: state.grid.filter
});

export default connect(mapStateToProps)(GridComponent);
