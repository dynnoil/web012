import React from 'react';

import UserDetail from './UserDetail.jsx';

const detailsRecords = [
    {
        id: 1,
        name: "John Doe",
        about: "Nice guy",
        hobby: "Likes drinking wine",
        skills: ["html", "javascript", "redux"]
    },
    {
        id: 2,
        name: "Mary Moe",
        about: "Cute girl",
        hobby: "Likes playing xbox whole days long",
        skills: ["Fortran", "Lua", "R#"]
    }
];

const filterDetails = (id) => {
    return !id
        ? detailsRecords
        : detailsRecords.filter(detail => detail.id == id);
}

export default class UserDetails extends React.PureComponent {

    constructor() {
        super();
        this.state = { details: [] };
    }

    static getDerivedStateFromProps(newProps) {
        return {
            details: filterDetails(newProps.match.params.id)
        };
    }

    render() {
        return (
            <div>
                {this.state.details.map(userDetail =>
                    <UserDetail key={userDetail.id} {...userDetail} />
                )}
            </div>
        );
    }
}