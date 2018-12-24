import React from 'react';

export class GridRecord extends React.PureComponent {
    render() {
        const { firstName, lastName, active, toggleActive } = this.props;
        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                    <input type="checkbox" checked={active} onChange={toggleActive} />
                </td>
            </tr>
        );
    }
}