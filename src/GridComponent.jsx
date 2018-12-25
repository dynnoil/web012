import React from 'react';

import { GridRecord } from './GridRecord.jsx';
import { Filter } from './Filter.jsx';

const dataSource = [
    { id: 1, firstName: "John", lastName: "Doe", active: false },
    { id: 2, firstName: "Mary", lastName: "Moe", active: false },
    { id: 3, firstName: "Peter", lastName: "Noname", active: true }
];

export default class GridComponent extends React.PureComponent {

    constructor() {
        super();
        this.state = { records: [] };
        this.filterRef = React.createRef();
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.filterRef.current.focus();
        this.setState({ records: dataSource });
    }

    toggleActive(index) {
        let records = [...this.state.records];
        records[index].active = !records[index].active;
        this.setState({
            records
        });
    }

    handleFilterChange(event) {
        const value = event.target.value;
        const filteredRecords = dataSource.filter(record => {
            return record.firstName.toUpperCase().includes(value.toUpperCase());
        });
        this.setState({
            records: filteredRecords
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
                        {this.state.records.map((record, index) =>
                            <GridRecord
                                {...record}
                                key={record.id}
                                history={this.props.history}
                                toggleActive={this.toggleActive.bind(this, index)} />
                        )}
                    </tbody>
                </table>
                {this.props.children && React.cloneElement(this.props.children, { records: this.state.records })}
            </div>
        );
    }
}
