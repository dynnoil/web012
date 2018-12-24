import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { GridRecord } from './GridRecord.jsx';

const dataSource = [
    { firstName: "John", lastName: "Doe", active: false },
    { firstName: "Mary", lastName: "Moe", active: false },
    { firstName: "Peter", lastName: "Noname", active: true }
];

class GridComponent extends React.PureComponent {

    constructor() {
        super();
        this.state = { records: [] };
    }

    componentDidMount() {
        this.setState({ records: dataSource });
    }

    toggleActive(index) {
        let records = [...this.state.records];
        records[index].active = !records[index].active;
        this.setState({
            records
        });
    }

    render() {
        return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.records.map((record, index) =>
                        <GridRecord key={index} {...record} toggleActive={this.toggleActive.bind(this, index)} />
                    )}
                </tbody>
            </table>
        )
    }
}

const Filter = () => (
    <div>
        <input type="text" placeholder="Filter by firstname" />
    </div>
);

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Filter />
                <GridComponent />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

