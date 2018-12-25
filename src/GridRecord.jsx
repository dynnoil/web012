import React from 'react';
import PropTypes from 'prop-types';

export class GridRecord extends React.PureComponent {

    constructor(props) {
        super(props);
        this.showUserDetails = this.showUserDetails.bind(this);
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        active: PropTypes.bool,
        toggleActive: PropTypes.func
    }

    static defaultProps = {
        firstName: 'N/A',
        lastName: 'N/A',
        active: false,
        toggleActive: () => { }
    }

    showUserDetails(event) {
        event.preventDefault();
        this.props.history.push(`/details/${this.props.id}`);
    }

    render() {
        const { id, firstName, lastName, active, toggleActive } = this.props;
        return (
            <tr>
                <th onClick={this.showUserDetails}><a href="#">{id}</a></th>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                    <input type="checkbox" checked={active} onChange={toggleActive} />
                </td>
            </tr>
        );
    }
}